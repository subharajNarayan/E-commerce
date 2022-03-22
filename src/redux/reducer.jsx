import * as types from './ActionTypes';

const initialState = {
    users: [],
    user: {},
    loading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.ADD_USER:
        case types.DELETE_USER:
        case types.UPDATE_USER:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default usersReducer;