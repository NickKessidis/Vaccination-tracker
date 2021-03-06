import api from '../../utils/api';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    USER_UPDATED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    DELETE_USER,
    LOGOUT,
    CLEAR_HOSPITAL,
    PATIENT_CLEAR,
} from './types';


// Load User
export const loadUser = () => async dispatch => {
    try {
        const res = await api.get('/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

//Register user
export const register = formData => async dispatch => {
    try {
        const res = await api.post('/users/signup',formData);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach( error => {
                dispatch(setAlert(error.msg, 'danger'))
            });
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// Update User
export const updateUser = () => async dispatch => {
    try {
        const res = await api.get('/auth');

        dispatch({
            type: USER_UPDATED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const body = { email, password };

    try {
        const res = await api.post('/users/login', body);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};


export const deleteUser = () => async dispatch => {
    if(window.confirm('Are you sure? The user will be permanently deleted!')) {
    try{
        const res = await api.delete('/users');

        dispatch({type: DELETE_USER});

        dispatch(setAlert('User was permanently deleted'));
    } catch(err) {
        dispatch(setAlert('An error occured during the deletion'));
    }
}
}

// Edit User info
export const editUser = (formData) => async dispatch => {
    try {
       const res= await api.put('/users', formData);
        if (res) {
            dispatch(setAlert("User Updated", "success"));
        } else
            dispatch(setAlert("User did not updated", "danger"));
    
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
}


// Logout
export const logout = () => async dispatch => {

    dispatch({
        type: CLEAR_HOSPITAL
    });

    dispatch({
        type: PATIENT_CLEAR
    });

    dispatch({
        type: LOGOUT
    });
}