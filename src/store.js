import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { commentsReducer } from "./Services/Reducers/Reducers";


const store=createStore(commentsReducer,applyMiddleware(thunk));

export default store