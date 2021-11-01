import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementCounter, decrementCounter} from '../store/actions/CounterActions'

function Home2() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.CounterReducer.counter);
    return (
        <div>
            <h1>HOME</h1>
            <button onClick={() => dispatch(incrementCounter())}>+</button> 
            <span>{counter}</span> 
            <button onClick={() => dispatch(decrementCounter())}>-</button>
        </div>
    )
}

export default Home2
