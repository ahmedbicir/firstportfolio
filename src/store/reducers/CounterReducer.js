const initialState = { 
    counter: 120,  
  };

const CounterReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'INCREMENT':
            return {
                counter: state.counter + action.payload
            }  
        case 'DECREMENT':
            return {
                counter: state.counter - action.payload
            }  
        default:
            return state;
    }
}

export default CounterReducer;
