import React from 'react'
import {useSelector} from 'react-redux'
function StudentsList() {
    const students = useSelector(state => state.StudentsReducer.students)
    const studentsAll = students.map(student =>{
        return(
            <div className="student">
                <p>Name: {student.name}</p>
                <p>Name: {student.email}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>Students List</h2>
            <div className="students__all">{studentsAll}</div>
        </div>
    )
}

export default StudentsList
