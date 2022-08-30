import { actionSetImagesList, FETCH_IMAGES_LIST } from "../actions/data";

import { requestFetchImagesList } from "../requests/imagesRequest";

const imageMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_IMAGES_LIST: {
      const { searchValue, page } = store.getState();
      let images = [];
      const response = await requestFetchImagesList(searchValue, page);
      const totalResult = response.data.total;
      if (response.status === 200) {
        for (let index = 0; index < response.data.hits.length; index++) {
          images.push(response.data.hits[index].webformatURL);
        }
        // we update the store with the results of the API
        store.dispatch(actionSetImagesList(images, totalResult));
      }
      return;
    }

    default:
      next(action);
  }
};

export default imageMiddleware;
