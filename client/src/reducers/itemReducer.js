import { v4 as uuid } from 'uuid';
import * as actionTypes from '../actions/action';


const initialState = {
    items: [
        {
            id: uuid(),
            name: 'eggs'
        },
        {
            id: uuid(),
            name: 'orange'
        },
        {
            id: uuid(),
            name: 'BANANA'
        },
        {
            id: uuid(),
            name: 'MANGO'
        },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    }
}