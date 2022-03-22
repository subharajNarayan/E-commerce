import { combineReducers } from "redux";
import addItem from "./AddItemReducer";
import productsReducer from "./productReducer";
import usersreducer from "./reducer";

const rootreducer = combineReducers({
    users : usersreducer,
    products: productsReducer,
    addItem ///file should be import from AddItemReducer
})

export default rootreducer;