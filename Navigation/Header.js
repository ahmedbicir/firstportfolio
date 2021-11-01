import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
    const [state, updateState] = useState({
        isAuthenticated: true,
        user: "Ali"
    })
    /* const checkLoggedIn = () =>{
        if(state.isAuthenticated){
            return(
                <li><NavLink to="/fruits">{state.user}</NavLink></li>
            )
        }
        else{
            return(
            <>
                <li><NavLink to="/fruits">Sign In</NavLink></li>
                <li><NavLink to="/fruits">Sign Up</NavLink></li>
            </>
            )
        }
    } */
    const checkLoggedIn = () =>{
        return state.isAuthenticated ?
            <li><NavLink to="/fruits">{state.user}</NavLink></li>
            :
            <>
                <li><NavLink to="/fruits">Sign In</NavLink></li>
                <li><NavLink to="/fruits">Sign Up</NavLink></li>
            </>
    }
    return (
        <header>
            <div className="logo">MyApp</div>
            <nav>
                <ul>
                    <li><NavLink to="/">Guri</NavLink></li>
                    <li><NavLink to="/Xog">Xog</NavLink></li>

                   <li><NavLink to="/Maclumad">Maclumad</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/fruits">Fruits</NavLink></li>
                    {checkLoggedIn()}               
                </ul>

            </nav>
        </header>
    )
}

export default Header
