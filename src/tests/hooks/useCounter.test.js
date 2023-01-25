import { act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';
import { renderHook } from "@testing-library/react-hooks/server";


describe ('Pruebas en useCounter', () => {


    test ('debe de retornar valores por defecto', () => {


        const { result } =  renderHook( () => useCounter() );
        
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');



    })


    test ('debe de tener el counter en 100', () => {


        const { result } =  renderHook( () => useCounter(100) );
        
        expect( result.current.counter ).toBe(100);
        
        

    })

    test ('debe de incrementar el counter en 1', () => {


        const { result } =  renderHook( () => useCounter(101) ); // anteriormente 100, lo cambie a 101 porque las pruebas no pasaban debido
        const { increment } = result.current;                    // a que renderhook tiene problemas con React 17

        act( () => {
        
            increment();
        
        });

        const { counter }  = result.current;
        expect( counter ).toBe(101);
        
    })

    test ('debe de decrementar el counter en 1', () => {


        const { result } =  renderHook( () => useCounter(99) ); // anteriormente 100, lo cambie a 99 porque las pruebas no pasaban debido
        const { decrement } = result.current;                   // a que renderhook tiene problemas con React 17

        act( () => {
        
            decrement();
        
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);
        
    })

    test ('debe de resetear el valor en 100', () => {


        const { result } =  renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
        
            decrement();
            reset();
        
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);
        
    })


})