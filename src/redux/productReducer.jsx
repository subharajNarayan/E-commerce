import * as types from './ActionTypes';

const initialProductState = {
    products : [],
    product : {},
    loading : false
}

const productsReducer = (state = initialProductState, action) => {
    switch (action.type){
        case types.GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case types.GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            }
        // case types.REMOVE_SELECTED_PRODUCT:
        //     return {
        //         ...state,
        //         loading:false
        //     }
        default:
            return state;
    }
}
export default productsReducer;
