import * as actionTypes from '../../redux/actions/action';

const initialState = {
    items: [],
    loading: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state,
                items: action.payload.Item,
                loading: false,
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case actionTypes.ADD_ITEMS:
            return {
                ...state,
                items: [action.payload.Item, ...state.items]
            };
        case actionTypes.ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
