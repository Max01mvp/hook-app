import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  
  //1. Obtener la refencia al userContext

    const { setUser } = useContext( UserContext );

    //2. setUser

    /*
        id:123,
        name: 'John Doe',
    */

  return (
    <div>
        <h1>Login Screen</h1>
        <hr />
        <button 
        
        className="btn btn-primary"
        onClick={ () => setUser({

          id: 123,
          name: 'John Doe',

        })}
        >
          Login
        </button>
        
    </div>
  )
}
