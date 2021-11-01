import { combineReducers } from 'redux' 
import StudentsReducer from './StudentsReducer'
import ShaqaaleReducer from './ShaqaaleReducer'

const RootReducer  = combineReducers({
    StudentsReducer,
    ShaqaaleReducer,
})

export default RootReducer