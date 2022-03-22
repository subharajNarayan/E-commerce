import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./root-reducer";


const store = createStore(
    rootreducer, applyMiddleware(thunk, logger)
)
export default store;