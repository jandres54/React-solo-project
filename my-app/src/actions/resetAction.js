import {RESET_APP} from "../action-types/reset-action-type"

export const resetCart = (dispatch, itemData) => {
    return dispatch ({ type: RESET_APP, payload: itemData})
}