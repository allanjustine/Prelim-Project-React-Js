import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StudentCreate from './StudentCreate'
import StudentEdit from './StudentEdit'
import {useContext} from 'react';
import {StudentContext} from '../contexts/StudentContext';
import { ModalFooter } from 'react-bootstrap';

const Student = ({student}) => {
    const {students} = useContext(StudentContext);
    const {deleteStudent} = useContext(StudentContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editshow, setEditShow] = useState(false);
    const [deleteshow, setDeleteShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const handleDeleteClose = () => setDeleteShow(false);

    const [deleteId, setDeleteId] = useState("");


    const handleClickDelete = (id) => {
        setDeleteId(id)
        setDeleteShow(true)
    }

    useEffect(() => {
        handleClose()
        handleDeleteClose()
        handleEditClose()
    }, [students])
    // const [students, setStudents] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);


    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/students')
    //     .then (res => {
    //         if(!res.ok)
    //         throw Error('Could not fetch the data for that resource');
    //        return res.json();
    //     })
    //     .then (data => {
    //         setStudents(data);
    //         setIsPending(false);
    //         setError(null);
    //     })
    //     .catch(err => {
    //         setIsPending(false);
    //         setError(err.message);
    //     })
    //     }, 1000)
    // }, []);
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card" id="card">
                <h2 className="text-center mt-3"><span className="brandd2">Mater Dei College</span> Students</h2>
                        <hr />
                        <div className="d-flex justify-content-end float-right"><Button className='m-2' variant="primary" onClick={handleShow}>Add New Student</Button></div>
                    <div className="card-body shadow" style={{ height: "75vh", overflow: "auto" }}>
                        <table className="table table-striped table-hover table-bordered">
                            <thead className='bg-info'>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Number</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* {isPending && (<tr><td colSpan="6"><div className="loading" id="load"></div></td></tr>)}
                            {error && (<tr><td colSpan="6"> <i class="fa fa-times" aria-hidden="true" id="unavailable"><h2>{ error }</h2></i></td></tr>)}  */}
                            {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                <td>{student.email}</td>
                                <td>{student.contactNumber}</td>
                                <td>
                                    <button className="btn" id="edit-button"><i className="fa fa-gear" aria-hidden="true" id="edit" onClick={handleEditShow}></i></button>
                                    <button className="btn" id="delete-button"><i className="fa fa-trash" aria-hidden="true" id="delete"  onClick={() => handleClickDelete(student.id)}></i></button>
                                </td>
                                <Modal show={editshow} onHide={handleEditClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className="modal-title">
                                            <h3>Edit Student</h3>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <StudentEdit edit={student} />
                                        <Button className='form-control mt-1' variant="secondary" onClick={handleEditClose}>
                                            Close
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Student
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StudentCreate />
                <Button className='form-control mt-2' variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Body>
        </Modal>
        
        <Modal show={deleteshow} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                    <h3>Delete Student?</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>This deletion will can not be undone!</h5>
            </Modal.Body>
            <ModalFooter>
                <Button className='form-control bg-danger' onClick={() => deleteStudent(deleteId)}>Delete</Button>
                <Button className='form-control mt-1' variant="secondary" onClick={handleDeleteClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </div>
    );
}
 
export default Student;