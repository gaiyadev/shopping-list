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


//Register a user

export const register = ({ name, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    //Reguest body
    const body = JSON.stringify({ name, email, password });

    axios.post(' api/users', body, config).then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
};


//Register a user

export const login = ({ email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    //Reguest body
    const body = JSON.stringify({ email, password });

    axios.post(' api/users/login', body, config).then(res =>
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
};





//checking token & load user
export const loadUser = () => (dispatch, getState) => {
    //use4r Loading
    dispatch({
        type: USER_LOADING
    });

    axios.get('api/users/auth', tokenConfig(getState)).then(res =>
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


//Setup config/headers
export const tokenConfig = getState => {

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
    return config;
}


//Logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
}