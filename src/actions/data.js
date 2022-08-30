export const SET_IMAGES_LIST = "SET_IMAGES_LIST";
export const FETCH_IMAGES_LIST = "FETCH_IMAGES_LIST";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_NEW_PAGE = "SET_NEW_PAGE";

//action main entry in useEffect for trigger the middleware for fetch API
export function actionFetchImagesList() {
  return {
    type: FETCH_IMAGES_LIST,
  };
}

// update the store with data from API (image board and total result)
export function actionSetImagesList(images, totalResult) {
  return { type: SET_IMAGES_LIST, payload: { images, totalResult } };
}

// update the search value in the store
export function actionSetSearchValue(searchValue) {
  return {
    type: SET_SEARCH_VALUE,
    payload: searchValue,
  };
}

// update the page in the store when you click on "more images"
export function actionSetNewPage() {
  return {
    type: SET_NEW_PAGE,
  };
}
