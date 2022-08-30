import axios from 'axios';

export async function requestFetchImagesList(searchValue, page) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY_API}&q=${searchValue}&pretty=true&page=${page}&per_page=9`)
    return response;
  }
  catch (err) {
    return err.response;
  }
}