import React from 'react'
import {NavLink} from 'react-router-dom'

function contact() {
    return (
        <contact>
              <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shaqaale">Shaqaale</NavLink></li>
                    <li><NavLink to="/shaqaale-list">Shaqaale List</NavLink></li>
                </ul>
            </nav>
        </contact>
    )
}

export default contact
