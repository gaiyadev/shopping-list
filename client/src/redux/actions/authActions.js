import axios from 'axios';
import { returnErrors } from '../actions/errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/action'

//checking token & load user

export const loadUser = () => (dispatch, getState) => {
    //use4r Loading
    dispatch({
        type: USER_LOADING
    });
    //Get token from localStorage
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // Checking for token
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    axios.get('api/users/auth', config).then(res =>
        dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        })
}