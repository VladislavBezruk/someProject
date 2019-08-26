import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    DETAILS_PRODUCT
} from "../types/types";


const initialState = {
    count: 1
  };

  export default function reducer(state = initialState, action) {
    switch (action.type) {
  
      case ADD_PRODUCT:
        return {
          ...state
          }

      case DELETE_PRODUCT:
        return {
          ...state
          }

      case DETAILS_PRODUCT:
        return {
          ...state
        }

      default:
        return state;
    }
  }