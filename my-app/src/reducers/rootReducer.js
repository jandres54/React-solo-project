import { combineReducers } from "redux";
import cartReducer from "./Cart-reducer"
import removeItemReducer from "./RemoveFromCart"
// import setDataReducer from "./setDataReducer"

const rootReducer = combineReducers({
    cartReducer,
    removeItemReducer,
    // setDataReducer,


});

export default rootReducer;