import * as actionTypes from '../../redux/actions/action';
//  import store from '../../redux/store/store';

const initialState = {
    items: [],
    loading: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            console.log(action.payload)
            return {
                ...state,
                items: action.payload,
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
                items: [action.payload, ...state.items]
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
console.log(initialState.items)
