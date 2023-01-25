import {useState} from "react"

export const useCounter = (initialState = 10) => {
  
    const [counter, setCounter] = useState(initialState)

    const increment = () => {

        setCounter( counter + 1);

    }

    const reset = () => {

        setCounter( initialState );

    }

    const decrement = () => {

        setCounter( counter - 1);

    }

    return{

        counter,
        increment,
        reset,
        decrement,


    };



}

// ESTE CODIGO DE EJEMPLO. USUALMENTE NO SE USA FACTOR

//export const useCounter = (initialState = 10) => {
//  
//    const [state, setState] = useState(initialState)

//    const increment = (factor = 1) => {

//        setState( state + factor);

//    }

//    const reset = () => {

//        setState( initialState );

//    }

//    const decrement = (factor = 1) => {

//        setState( state - factor);

//    }

//    return{

//        state,
//        increment,
//        reset,
//        decrement,


//    };



//}