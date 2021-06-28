import { ADD_TO_CART } from "../action-types/cart-action-types";
import { REMOVE_FROM_CART} from "../action-types/remove-action-type";
import { RESET_APP } from "../action-types/reset-action-type";

const initialState = [];


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return [ ...state, action.payload];
      case  REMOVE_FROM_CART:
        const stateOfShoes = state.filter((product) => product.sku !== action.payload)
          return stateOfShoes;

      case RESET_APP:
          return state = action.payload ;   


      default:
        return state;
    }
  };
  export default cartReducer;







// - Add product to cart
// - Remove product from cart
// - media queries for mobile responsiveness
// - layout 
// - All in react redux using reducers and actions 

// implement supabase to your application so that as a user you can click checkout and buy everything in your cart and send that to your backend
// allow users to log in
// check users in your user db via supabase auth
// style your website