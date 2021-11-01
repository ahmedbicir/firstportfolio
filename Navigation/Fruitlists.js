import React from 'react'

function Fruitlists(props) {
    const Miro = props.mir.map( Fruit => {
        return(
            <div className="fruit">
                <table>
                    <tr>
                           <th>Fruit type</th> 
                           <th>Cost</th> 
                           <th>Firm</th>  
                    </tr>
                   <tr>
                   <td> <p>{Fruit.fruittype}</p></td>
                    <td><p>{Fruit.Cost}</p></td>
                    <td><p>{Fruit.Firm}</p></td>
                   </tr>
                    </table>
               {/*  <p>{Fruit.fruittype}</p>
                <p>{Fruit.Cost}</p>
                <p>{Fruit.Firm}</p> */}
            </div>
        )
    })
    return (
        <div>
            <h1 className="fruitlist">Fruit lists </h1>
            {Miro}
        </div>
    )
}

export default Fruitlists
