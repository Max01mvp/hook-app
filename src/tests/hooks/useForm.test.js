import { useForm } from "../../hooks/useForm";
import { renderHook, act } from "@testing-library/react-hooks/server";


describe ('Pruebas en useForm', () => {


    const initialForm = {

        name: 'max',
        email: 'max@example.com',

    };

    test('Deberia de regresar un formulario por defecto', () => {
    
        const { result } = renderHook ( () => useForm ( initialForm));
        const [ formValues, handleInputChange, reset] = result.current;

        expect ( formValues ).toEqual ( initialForm );
        expect ( typeof handleInputChange ).toBe('function');
        expect ( typeof reset ).toBe('function');

    });

    test('Deberia cambiar el valor de formulario (cambiar name)', () => {
    
        const { result } = renderHook ( () => useForm ( initialForm));
        const [ , handleInputChange ] = result.current;

        act ( () => {

            handleInputChange ( {
                target: { 
                name: 'name', 
                value:'max', 
        }
    });
    });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'max'});
});

    test('Deberia de restablecer el formulario con RESET', () => {
    

        const { result } = renderHook ( () => useForm ( initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act ( () => {

            handleInputChange ( {
                target: { 
                name: 'name', 
                value:'max', 
        }
    });

    reset();

});

        const [ formValues ] = result.current;
        expect ( formValues ).toEqual( initialForm );

    });
})