import { v4 as uuid } from 'uuid';
import * as actionTypes from '../actions/action';
import store from '../store/store';

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
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case actionTypes.ADD_ITEMS:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
}