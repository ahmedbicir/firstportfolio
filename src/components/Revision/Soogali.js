import React ,{useState}from 'react'
import Muraajaco from './Muraajaco'
import Addcontacts from './Addcontacts'
import Contactlists from './Contactlists'
import Contactcard from './Contactcard'
import Navigation from './Navigation'
import './Css.css';
import { getDefaultNormalizer } from '@testing-library/react'



function Soogali() {
  const[contacts,setcontacts]=useState([]);
  const Addcontacthandler=(contact)=>{
    console.log(contact);
    setcontacts([...contacts,contact]);

  }
  
    return (
        <div>
          <Muraajaco/> 
        <Navigation/>
          <Addcontacts Addcontacthandler={Addcontacthandler}/>
          <Contactlists  contacts={contacts} />
          <Contactcard/> 

      </div>
    );
}

export default Soogali
