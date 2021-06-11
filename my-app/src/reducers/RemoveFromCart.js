import { REMOVE_FROM_CART} from "../action-types/remove-action-type";

const initialState = [];


const removeItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case  REMOVE_FROM_CART:
        return [ ...state, action.payload];
      default:
        return state;
    }
  };
  export default removeItemReducer;