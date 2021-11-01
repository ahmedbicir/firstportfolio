import React ,{useState}from 'react'

function Addcontacts(props) {
    const [state,updatestate]=useState({ //const state={}
        id:"",
        name:"",
        Email:"",
    })

    const handleChange=(e)=>{
    updatestate({
        ...state,[e.target.id]:e.target.value
        //
    })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
/*         props.contactSooQaad(state)
 */ 
props.Addcontacthandler(state);
updatestate({name:"" ,Email:"Email"})
console.log(state); 

        // clear the form
        document.querySelector("#id").value = ""
        document.querySelector("#name").value = ""
        document.querySelector("#Email").value = ""
    }
    return (
        <div>
          <h1>Add Contacts</h1>   
          <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Name</label>
                    <input type="text" id="name" placeholder="Enter name"  onChange={handleChange}/>
                </div>
                <div className="input">
                    <label>Email</label>
                    <input type="Email" id="Email" placeholder="Enter Email" onChange={handleChange}/>
                </div>
                <button classname="Add"> Add </button>

            
            </form>
        </div>
    )
}

export default Addcontacts

/* import react from "react";

class  Addcontacts extends react.component
{ 
    render()
    
return (
        <div>
            <h1>jjj</h1>
        </div>
    )
}
export Addcontacts;

 */