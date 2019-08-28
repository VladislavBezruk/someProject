import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
} from "./actions";

import listData from '../../data/data'

const initialState = {
    list: listData
  };

  function compare(obj1, obj2) {
    return obj1.id - obj2.id;
  }

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCT:
      let lastElement = state.list.length - 1
      let lastElementId = state.list[lastElement].id + 1
      let newItem = [{id: lastElementId, name: action.payloadName, image_url: action.payloadImage, price: action.payloadPrice}]
      let forChangeList = state.list.slice()
      Array.prototype.push.apply(forChangeList, newItem); 
      return {
        ...state,
        list: forChangeList,
        }

    case DELETE_PRODUCT:
      let cleanArray = state.list.filter(el => el.id != action.payload.id)
      return {
        ...state,
        list: cleanArray
        }

    case EDIT_PRODUCT:
      let cleanArray2 = state.list.filter(el => el.id != action.payloadItem.id)
      let editedArray = state.list.filter(el => el.id == action.payloadItem.id)
      editedArray[0].image_url = action.payloadImage
      editedArray[0].name = action.payloadName
      editedArray[0].price = action.payloadPrice
      Array.prototype.push.apply(cleanArray2, editedArray); 
      cleanArray2.sort(compare)
      return {
        ...state,
        list: cleanArray2
        }
  }
  
  return state;
};

 