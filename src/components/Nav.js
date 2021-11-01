import React from 'react'

import {FaTimes} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'



import {NavLink} from 'react-router-dom'
function Nav() {
   
const barsevent=()=>{ 
    const bars = document.querySelector('.bars');

    const nav = document.querySelector('nav');

    const close = document.querySelector('.close');
    const header = document.querySelector('header');


    nav.classList.toggle('show')  
    close.classList.toggle('show') 
    bars.classList.toggle('menu')
    header.classList.toggle('increase_head')


    // bars.style.display="none"
    


            
                }
                const NavLinkEvent=()=>{
                    let linksA=document.querySelectorAll('.navLinks')
                    const bars = document.querySelector('.bars');

                    const nav = document.querySelector('nav');

                    const close = document.querySelector('.close');
                     const header = document.querySelector('header');



                  let x= linksA.forEach(element => {

                        nav.classList.remove('show') 
                        close.classList.remove('show') 
                        //  bars.style.display="block"

                        bars.classList.remove('menu')
                     header.classList.remove('increase_head')



                        
                    });
                }
                const closeevent=()=>{
                    const bars = document.querySelector('.bars');

                    const nav = document.querySelector('nav');

                    const close = document.querySelector('.close');
                      const header = document.querySelector('header');

                    nav.classList.remove('show') 
                    close.classList.remove('show')
                    header.classList.remove('increase_head')

                    bars.classList.toggle('menu')





                }








    return (
     
        <header>
              <a  className="home">AB</a>
        <nav>  
        <ul>  

            <li className="navLinks" onClick={NavLinkEvent}><NavLink to="/">Home</NavLink></li>
            <li className="navLinks" onClick={NavLinkEvent}><NavLink to="/About">About </NavLink></li>
            <li className="navLinks" onClick={NavLinkEvent}><NavLink to="/Service">Service</NavLink></li>
            <li className="navLinks" onClick={NavLinkEvent}><NavLink to="/ContactUs">ContactUs</NavLink></li> 
{/*             <li><NavLink to="/Todolist">Todolist</NavLink></li> 
 */}
              
        </ul>                
        </nav>
       <AiOutlineMenu className="bars" onClick={barsevent} color="white" size="30px" />
            <FaTimes className="close" onClick={closeevent} color="white" />
      
            {/* <span className="ahmed">hi!.i am a deveoper</span> */}

          
           </header>

     
       
     
    
    )
}

export default Nav
