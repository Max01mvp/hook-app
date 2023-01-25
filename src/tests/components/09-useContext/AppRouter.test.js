import React from 'react'
import { shallow } from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
describe('Pruebas en <AppRouter />', () => {


    const user = {

        id: 1,
        name: 'Max'

    }


    const wrapper = shallow( 
        <UserContext.Provider value={{
            user
        }}>
                <AppRouter /> 
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })


})