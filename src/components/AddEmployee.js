import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addEmployee} from '../store/actions/EmployeesActions'


function AddEmployee() {
    const dispatch = useDispatch();
    const [state, updateState] = useState({
        fullname:'',
        phone:'',
        email:'',
        natId:''
    })
    
    const handleChange = (e) =>{
        updateState({
            ...state, [e.target.id]:e.target.value
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addEmployee(state))
    }

    return (
        <div className="addemployee__container">
            <h3>ADD EMPLOYEE</h3>
            <form className="addemployee__form" onSubmit = {handleSubmit}>
                <label>Full name</label>
                <input type="text" id="fullname" onChange = {handleChange} required/>
                <label>Phone</label>
                <input type="text" id="phone" onChange = {handleChange} required/>
                <label>Email</label>
                <input type="email" id="email" onChange = {handleChange} required/>
                <label>National Id</label>
                <input type="text" id="natid" onChange = {handleChange} required/>
                <input type="submit" value="Add Employee"/>
            </form>
        </div>
    )
}

export default AddEmployee
