import {
    SHOW_LIST,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    DETAILS_PRODUCT
} from "./actions";

import list from '../../data/data'

const initialState = {
    list: list
  };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_LIST:
        return {
          ...state,
          list: action.payload
          }

    case EDIT_PRODUCT:
      return {
        ...state,
        list: action.payload
        }

    case DELETE_PRODUCT:
      return {
        ...state,
        list: action.payload
        }
  }
  
  return state;
};

 