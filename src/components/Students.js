import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addStudent} from '../store/actions/StudentsActions'

function Students() {
    const dispatch = useDispatch()
    const [state, updateState] = useState({
        name:'',
        email:'',
        
    })
    const handleChange = (e) =>{
        updateState({
            ...state, [e.target.id]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email} = state
        const student = {name, email}
        dispatch(addStudent(student))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" id="name" onChange={handleChange}/><br/><br/>
                <label>Email</label><br/>
                <input type="email" id="email" onChange={handleChange}/><br/><br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Students
