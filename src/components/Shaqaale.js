import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addShaqaale} from '../store/actions/ShaqaaleActions'
function Shaqaale() {
    const dispatch = useDispatch()

    const [state, updateState] = useState({
        magac:'',  
        phone:'',
        
    })
    const handlechange=(e)=>{ 
        updateState({
            ...state,[e.target.id]:e.target.value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const {magac, phone} = state
        const shaqaale= {magac, phone}
        // console.log(shaqaale)
        dispatch(addShaqaale(shaqaale))    
        document.querySelector("#magac").value = ""
        document.querySelector("#phone").value = ""
         
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Magac</label><br/>
                <input type="text" id="magac" onChange={handlechange}/><br/><br/>
                 
                 <label>Phone</label><br/>

                <input type="text" id="phone"  onChange={handlechange}/><br/><br/>
                <input  type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Shaqaale
