const initialState = {
   shaqaale:[],
};


const ShaqaaleReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'AddShaqaale':
            //console.log(action.payload)
            return{
                shaqaale:[...state.shaqaale , action.payload]
            }
        default:
            return state;
    }
}
export default ShaqaaleReducer;
