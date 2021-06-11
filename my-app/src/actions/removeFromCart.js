import { REMOVE_FROM_CART } from "../action-types/remove-action-type";

export const removeFromCart = (dispatch, itemData) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: itemData });
};