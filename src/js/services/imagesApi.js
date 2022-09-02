import axios from 'axios';

const API_KEY = '29629302-abb150ceeb95ece7f01e6af14';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (inputValue, perPage, page) => {
  const res = await axios.get(
    `/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
  );
  return res.data;
};
export { fetchImages };
