import React from 'react'

function Contactcard(props) {
    const{id,name,Email}=props.contacts;
    return (
        <div>
            <div> {name}</div>
           <div>{Email}</div>
      </div>
    );
}

export default Contactcard
