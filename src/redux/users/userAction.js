import axios from "axios";
import { 
    FETCH_ALL_USERS,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_ONE_USER,
    FETCH_ONE_USER_SUCCESS,
    FETCH_ONE_USER_FAILURE,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from "./userType";

export const getAllUsers = () => {

    return function (dispatch) {
        dispatch({ type: FETCH_ALL_USERS });
        axios.get(`${process.env.REACT_APP_API}`)
            .then((response) => {
                dispatch({
                    type: FETCH_ALL_USERS_SUCCESS,
                    payload: response.data,
                  });
            })
            .catch((error) => {
                dispatch({ type: FETCH_ALL_USERS_FAILURE, payload: error });
            });
    }
};

export const deleteUser = (id) => {

    return function (dispatch) {
        dispatch({ type: DELETE_USER });
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
            .then(() => {
                dispatch({ type: DELETE_USER_SUCCESS });
                dispatch(getAllUsers());
            })
            .catch((error) => {
                dispatch({ 
                    type: DELETE_USER_FAILURE, 
                });
            });
    }
};

export const addUser = (user) => {

    return function (dispatch) {
        dispatch({ type: ADD_USER });
        axios.post(`${process.env.REACT_APP_API}`, user)
            .then((response) => {
                dispatch({ type: ADD_USER_SUCCESS });
                dispatch(getAllUsers());
            })
            .catch((error) => {
                dispatch({ 
                    type: ADD_USER_FAILURE, 
                });
            });
    }
};

export const getOneUser = (id) => {

    return function (dispatch) {
        dispatch({ type: FETCH_ONE_USER });
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then((response) => {
                dispatch({
                    type: FETCH_ONE_USER_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({ type: FETCH_ONE_USER_FAILURE, payload: error });

            });
    }
};

export const editUser = (id, user) => {

    return function (dispatch) {
        dispatch({ type: EDIT_USER });
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((response) => {
                dispatch({
                    type: EDIT_USER_SUCCESS,
                });
                dispatch(getAllUsers());
            })
            .catch((error) => {
                dispatch({ type: EDIT_USER_FAILURE});

            });
    }
};