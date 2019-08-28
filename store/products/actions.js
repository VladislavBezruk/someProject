export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

export const addProduct = (image, name, price) => ({
  type: ADD_PRODUCT,
  payloadImage: image,
  payloadName: name,
  payloadPrice: price
})

export const deleteProduct = item => ({
  type: DELETE_PRODUCT,
  payload: item
})

export const editProduct = (item, image, name, price ) => ({
  type: EDIT_PRODUCT,
  payloadItem: item,
  payloadImage: image,
  payloadName: name,
  payloadPrice: price
})
