import { combineReducers } from 'redux';
import itemReducer from '../../redux/reducers/itemReducer';
import authReducer from '../../redux/reducers/authReducer';
import errorReducer from '../../redux/reducers/errorReducer';

// To bring all app reducers together
export default combineReducers({
    item: itemReducer,
    auth: authReducer,
    error: errorReducer
});