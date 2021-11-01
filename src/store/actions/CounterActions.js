export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export function incrementCounter(){
    return{
        type:INCREMENT,
        payload: 10
    }
}

export function decrementCounter(){
    return{
        type:DECREMENT,
        payload: 20
    }
}