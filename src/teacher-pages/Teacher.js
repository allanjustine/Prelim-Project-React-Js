import {useContext, useState, useEffect} from 'react';
import {TeacherContext} from '../contexts/TeacherContext';
import { Modal, ModalFooter, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TeacherEdit from './TeacherEdit'



const Teacher = ({teacher}) => {

    const {deleteTeacher} = useContext(TeacherContext)

    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [deleteshow, setDeleteShow] = useState(false);
    const handleDeleteClose = () => setDeleteShow(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleClickDelete = (id) => {
        setDeleteId(id)
        setDeleteShow(true)
    }

    useEffect(() => {
        handleClose()
    }, [teacher])

    return (
        <>
            <td>{teacher.name}</td>
            <td>{teacher.email}</td>
            <td>{teacher.address}</td>
            <td>{teacher.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>    
                    <button onClick={handleShow} className="btn" id="edit-button" data-toggle="modal"><i className="fa fa-gear" aria-hidden="true" id="edit"></i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => handleClickDelete(teacher.id)}  className="btn" id="delete-button" data-toggle="modal"><i className="fa fa-trash" aria-hidden="true" id="delete"></i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">
                        <h3>Edit Teacher</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TeacherEdit theTeacher={teacher} />
                    <Button className='form-control mt-1' variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Body>
            </Modal>
            <Modal show={deleteshow} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">
                        <h3>Delete Teacher?</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>This deletion will can not be undone!</h5>
                </Modal.Body>
                <ModalFooter>
                    <Button className='form-control bg-danger' onClick={() => deleteTeacher(deleteId)}>Delete</Button>
                    <Button className='form-control mt-1' variant="secondary" onClick={handleDeleteClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Teacher;