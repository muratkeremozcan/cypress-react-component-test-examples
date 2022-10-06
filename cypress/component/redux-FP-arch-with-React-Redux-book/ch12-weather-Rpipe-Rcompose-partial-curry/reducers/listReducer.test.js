import listReducer from './listReducer';
import * as actions from '../actions';

test('addCity add city', function(){
    const cities = []

    const action = actions.addCity('Malaga');

    const expectOutput = [
        'Malaga'
    ];

    expect(listReducer(cities, action)).toEqual(expectOutput);
});

test('addCity does not add existing city', function(){
    const cities = [
        'Sorrento'
    ]

    const action = actions.addCity('Sorrento');

    const expectOutput = [
        'Sorrento'
    ];

    expect(listReducer(cities, action)).toEqual(expectOutput);
});
