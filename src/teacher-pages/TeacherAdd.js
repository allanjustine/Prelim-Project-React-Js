import { Form, Button } from "react-bootstrap"

import {TeacherContext} from '../contexts/TeacherContext';
import {useContext, useState} from 'react';



const TeacherAdd = () =>{

    const {addTeacher} = useContext(TeacherContext);

    const [newTeacher, setNewTeacher] = useState({
        name:"", email:"", address:"", phone:""
    });

    const onInputChange = (e) => {
        setNewTeacher({...newTeacher,[e.target.name]: e.target.value})
    }

    const {name, email, address, phone} = newTeacher;

    const handleSubmit = (e) => {
        e.preventDefault();
        addTeacher(name, email, address, phone);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="text"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="number"
                    placeholder="Contact Number"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button className="form-control mt-4" variant="primary" type="submit" block>
                Add New Teacher
            </Button>
        </Form>

     )
}

export default TeacherAdd;