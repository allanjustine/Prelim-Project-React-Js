import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TeacherContext = createContext()
function getInitialState() {
    const teachers = localStorage.getItem('teachers')
    return teachers ? JSON.parse(teachers) : []
}

const TeacherContextProvider  = (props) => {

    const [teachers, setTeachers] = useState(getInitialState)

    useEffect(() => {
        localStorage.setItem('teachers', JSON.stringify(teachers))
      }, [teachers])

const sortedTeachers = teachers.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addTeacher = (name, email, address, phone) => {
    setTeachers([...teachers , {id:uuidv4(), name, email, address, phone}])
}

const deleteTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id))
}

const updateTeacher = (id, updatedTeacher) => {
    setTeachers(teachers.map((teacher) => teacher.id === id ? updatedTeacher : teacher))
}

    return (
        <TeacherContext.Provider value={{sortedTeachers, addTeacher, deleteTeacher, updateTeacher}}>
            {props.children}
        </TeacherContext.Provider>
    )
}

export default TeacherContextProvider;