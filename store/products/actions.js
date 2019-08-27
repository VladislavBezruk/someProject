export const SHOW_LIST = "SHOW_LIST";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DETAILS_PRODUCT = "DETAILS_PRODUCT";


  export const showList = list => ({
    type: SHOW_LIST,
    payload: list
  })

  export const addProduct = () => {
    return{
    type: ADD_PRODUCT,
    payload: list
    }
  }

  export const deleteProduct = () => {
    return{
    type: DELETE_PRODUCT,
    payload: list
    }
  }

  export const detailsProduct = () => {
    return{
    type: DETAILS_PRODUCT,
    payload: list
    }
  }
  