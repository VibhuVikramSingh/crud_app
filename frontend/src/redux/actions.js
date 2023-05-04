import * as types from "./actionTypes";
import axios from "axios";

const API = "http://localhost:5000";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload:users,
});

const userAdded = (msg) => ({
    type:types.ADD_USER,
    payload:msg,
});

export const loadUsers = () => {
    return function(dispatch){
        axios
        .get(`${API}/users`)
        .then((resp) => dispatch(getUsers(resp.data)))
        .catch((err) => console.log(err));
    };
};

export const addUsers = () => {
    return function(dispatch){
        axios
        .get(`${API}/users`)
        .then((resp) => dispatch(getUsers(resp.data)))
        .catch((err) => console.log(err));
    };
};