import { REMOVE_FROM_CART} from "../action-types/remove-action-type";
import { ADD_TO_CART } from "../action-types/cart-action-types";

const initialState = [];


const removeItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return [ ...state, action.payload];
      case  REMOVE_FROM_CART:
        return state.filter((product) => product.id !== action.payload);
      default:
        return state;
    }
  };
  export default removeItemReducer;



