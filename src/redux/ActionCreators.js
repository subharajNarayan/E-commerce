import axios from 'axios';
import * as types from './ActionTypes';

const addUser = () => ({
    type: types.ADD_USER
})

const getUsers = (users) => ({
    type: types.GET_USER,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

// const userUpdated = (user) => {
//     type: types.UPDATE_USER
// }

export const postUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:3001/user/`, user)
            .then((response) => {
                console.log("response", response);
                dispatch(addUser());
                dispatch(loadUsers());
            })
            .catch((error) => console.log(error));
    }
}

export const loadUsers = () => {
    return function (dispatch) {
        axios.get('http://localhost:3001/user')
            .then((response) => {
                console.log("response", response);
                dispatch(getUsers(response.data))
            })
            .catch((error) => console.log(error))
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:3001/user/${id}`)
            .then((response) => {
                console.log('response', response)
                dispatch(userDeleted())
            })
            .catch((error) => console.log(error))
    }
}



// --------------PRODUCTS START-----------------

//GET && DISPLAY ALL PRODUCTS

const getProducts = (products) => ({
    type: types.GET_PRODUCT,
    payload: products
})

export const loadProducts = () => {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log("response", response);
                dispatch(getProducts(response.data))
            })
            .catch((error) => console.log(error))
    }
}


//GET SINGLE PRODUCT
const SingleProduct = (product) => ({
    type: types.GET_SINGLE_PRODUCT,
    payload: product
});

export const getSingleProduct = (id) => {
    return (dispatch) => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
           console.log("response", response);
            dispatch(SingleProduct(response.data));
        })
        .catch((error) => console.log(error));
    }
}


//ADDITEM && DELETEITEM

export const addItem = (product) => ({
    type: types.ADD_ITEM,
    payload: product
})

export const delItem = (product) => ({
    type: types.DELETE_ITEM,
    payload: product
})  

// export const productItem = () => {
//     return (dispatch) => {

//     }
// }