import { PRODUCT_SELECTED } from "../action-types/setData-action-types";

export const removeFromCart = (dispatch, itemData) => {
  return dispatch({ type:PRODUCT_SELECTED, payload: itemData });
};