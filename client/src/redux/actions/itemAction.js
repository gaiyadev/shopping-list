import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/action';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
export const addItem = item => {
    return {
        type: ADD_ITEMS,
        payload: item
    };
};



