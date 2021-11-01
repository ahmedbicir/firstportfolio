import React from 'react'
import Contactcard from './Contactcard';
import Addcontacts from './Addcontacts'


function Contactlists(props) {
    const rendercontactlist=props.contacts.map((contacts)=>{
     return <Contactcard contacts={contacts}/>;

    });
    return (
        <div>
             <Contactcard/>
            <Addcontacts/>
            <h1>Contact list</h1>
            <h1>{rendercontactlist}</h1>
        </div>
    );

}

export default Contactlists
