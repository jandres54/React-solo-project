import {  PRODUCT_SELECTED} from "../action-types/setData-action-types";

const initialState = [];


const setDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case   PRODUCT_SELECTED:
        return [ ...state, action.payload];
      default:
        return state;
    }
  };
  export default setDataReducer;
