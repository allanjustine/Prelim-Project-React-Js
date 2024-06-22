import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {TeacherContext} from '../contexts/TeacherContext';
import Teacher from './Teacher';
import TeacherAdd from './TeacherAdd';
import Pagination from './Pagination';

const TeacherList = () => {

    const {sortedTeachers} = useContext(TeacherContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [teachersPerPage] = useState(20)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedTeachers])

    const indexOfLastTeacher = currentPage * teachersPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teachersPerPage;
    const currentTeachers = sortedTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);
    const totalPagesNum = Math.ceil(sortedTeachers.length / teachersPerPage);


    return (
    <div className='content'>
     <div className="row">
            <div className="col-md-12">
                <div className="card" id="card">
                <h2 className="text-center mt-3"><span className="brandd2">Mater Dei College</span> Teachers</h2>
                        <hr />
                        <div className="d-flex justify-content-end float-right"><Button className='m-2' variant="primary" onClick={handleShow}>Add New Teacher</Button></div>
                    <div className="card-body shadow" style={{ height: "75vh", overflow: "auto" }}>
                        <table className="table table-striped table-hover table-bordered">
                            <thead className='bg-info'>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* {isPending && (<tr><td colSpan="6"><div className="loading" id="load"></div></td></tr>)}
                            {error && (<tr><td colSpan="6"> <i class="fa fa-times" aria-hidden="true" id="unavailable"><h2>{ error }</h2></i></td></tr>)}  */}
                            {
                            currentTeachers.map(teacher => (
                                <tr key={teacher.id}>
                                    <Teacher teacher={teacher} />
                                </tr>
                            ))  
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    {/* <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentTeachers.map(teacher => (
                      <tr key={teacher.id}>
                        <Teacher teacher={teacher} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table> */}

    {/* <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentTeachers ={currentTeachers}
                sortedTeachers = {sortedTeachers} /> */}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                    <h3>Add Teacher</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TeacherAdd />
                <Button className='form-control mt-1' variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
            </Modal.Body>
        </Modal>
    </div>
    )
}

export default TeacherList;