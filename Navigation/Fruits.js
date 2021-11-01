import React, {useState} from 'react'
import Fruitlists from './Fruitlists'

function Fruits() {
    const [state, updateState] = useState({ 
        
        Fruits:[
            { fruittype:'Pineaple',Cost:500,Firm:'Bicir'},
            { fruittype:'Apple',Cost:1000,Firm:'Hersi'},
            { fruittype:' Mango',Cost:2000,Firm:'Ahmed'},
        ]
    })
    return (
        <div>
             <Fruitlists mir = {state.Fruits} />   
        </div>
    )
}

export default Fruits
