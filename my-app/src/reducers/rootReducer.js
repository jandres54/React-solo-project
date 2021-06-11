import { combineReducers } from "redux";
import cartReducer from "./Cart-reducer"
import removeItemReducer from "./RemoveFromCart"


const rootReducer = combineReducers({
    cartReducer,
    removeItemReducer,


});

export default rootReducer;