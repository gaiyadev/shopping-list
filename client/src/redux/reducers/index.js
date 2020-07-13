import { combineReducers } from 'redux';
import itemReducer from '../../redux/reducers/itemReducer';

// To bring all app reducers together
export default combineReducers({
    item: itemReducer
});