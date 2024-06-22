import {useState} from "react";
import { Form, Button } from "react-bootstrap";
import {StudentContext} from '../contexts/StudentContext';
import {useContext} from 'react';


const StudentCreate = () => {

    const {addStudent} = useContext(StudentContext);

    const [newStudent, setNewStudent] = useState({
        name: "", address: "", email: "", contactNumber: ""
    });

    const onInputChange = (e) => {
        setNewStudent({...newStudent, [e.target.name]: e.target.value})
    }

    const {name, address, email, contactNumber} = newStudent;
    
    function handlesubmit(e) {
        e.preventDefault();
        addStudent(name, address, email, contactNumber);
    }

    return ( 
        <Form onSubmit={handlesubmit}>
            <Form.Group className="mt-2">
                <Form.Control name="name" value={name} onChange = {(e) => onInputChange(e)} type="text" placeholder="Name" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="address" value={address} onChange = {(e) => onInputChange(e)} type="text" placeholder="Address" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="email" value={email} onChange = {(e) => onInputChange(e)} type="email" placeholder="Email" required>
                    
                </Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control name="contactNumber" value={contactNumber} onChange = {(e) => onInputChange(e)} type="number" placeholder="Contact Number" required>
                    
                </Form.Control>
            </Form.Group>
                <Button className="form-control mt-4" variant="primary" type="submit" block="true">
                    Add New Student
                </Button>
        </Form>
     );
}
 
export default StudentCreate;