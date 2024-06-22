import { Form, Button } from "react-bootstrap"

import {TeacherContext} from '../contexts/TeacherContext';
import {useContext, useState} from 'react';

const TeacherEdit = ({theTeacher}) =>{

    const id = theTeacher.id;

    const [name, setName] = useState(theTeacher.name);
    const [email, setEmail] = useState(theTeacher.email);
    const [address, setAddress] = useState(theTeacher.address);
    const [phone, setPhone] = useState(theTeacher.phone);


    const {updateTeacher} = useContext(TeacherContext);

    const updatedTeacher = {id, name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTeacher(id, updatedTeacher)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
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
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    className="mt-2"
                    type="number"
                    placeholder="Contact Number"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <Button className="form-control mt-4" variant="primary" type="submit" block>
                Update Teacher
            </Button>
        </Form>

     )
}

export default TeacherEdit;