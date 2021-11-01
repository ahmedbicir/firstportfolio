import React from 'react'
import {useSelector} from 'react-redux'

function Shaqaalelist() {
    const shaqaale = useSelector(state => state.ShaqaaleReducer.shaqaale)
    const ShaqaaleAll = shaqaale.map(shaq=>{
        return(
            <div className="shaq">
                <p>magac: {shaq.magac}</p>
                <p>phone: {shaq.phone}</p>
            </div>
        )
    })
    return (
        <div>
            <h3>shaqaalelist</h3>
            <div className="shaqaale-All">{ShaqaaleAll}</div>
        </div>
    )
}

export default Shaqaalelist
