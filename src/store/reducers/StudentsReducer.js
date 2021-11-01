const initialState = { 
    students:[], // Array to store all the students
  };

const StudentsReducer = (state = initialState, action) => {
    switch(action.type){ 
        case 'ADD_STUDENT':
            //console.log(action.payload)
            return {
                students: [...state.students, action.payload]
            }
        default:
            return state;
    }
}

export default StudentsReducer;
