import {  SET_IMAGES_LIST, SET_SEARCH_VALUE, SET_NEW_PAGE } from "../actions/data";

export const initialState = {
  imageList: [],
  searchValue: '',
  page: 1,
  totalResult: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case SET_NEW_PAGE:
      return {
        ...state,
        page : state.page+1,
      }

    case SET_SEARCH_VALUE:

      return {
        ...state,
        searchValue: action.payload,
        imageList :[],
        page: 1
      }

    case SET_IMAGES_LIST:
      return {
        ...state,
        imageList: state.imageList.concat(action.payload.images),
        totalResult: action.payload.totalResult,
      };
    default:
      return state;
  }
};

export default reducer;
