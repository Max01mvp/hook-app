

const initialState = [{

    id: 1,
    todo: 'Comprar pan',
    done: false

}];

const todoReducer = ( state = initialState, action ) => {  

    if( action?.type === 'agregar'){
        return [...state, action.payload];

    }

    return state;

    }

let todos = todoReducer();


    //no usar push en React

    const newTodo = {

        id: 2,
        todo: 'Comprar Leche',
        done: false
    }

    const action = {
    
        type: 'agregar',
        payload: newTodo

    }

    todos = todoReducer(todos, action);
    
    

console.log( todos );
