import {ADD_PRODUCT, DELETE_PRODUCT, DETAILS_PRODUCT} from '../types/types'

  export const addProduct = () => {
    return{
    type: ADD_PRODUCT
    }
  }

  export const deleteProduct = () => {
    return{
    type: DELETE_PRODUCT
    }
  }

  export const detailsProduct = () => {
    return{
    type: DETAILS_PRODUCT
    }
  }
  