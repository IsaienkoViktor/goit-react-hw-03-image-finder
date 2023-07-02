export const PER_PAGE = 12;

export async function fetchImages(page, query) {
  const API_KEY = '28879808-334bb14fa2bfcd03dcdc4a3cd';
  const BASE_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await fetch(BASE_URL);
  return response.ok
    ? response.json()
    : Promise.reject(new Error('Something went wrong, please try again'));
}

// import axios from 'axios';

// const API_KEY = '36975301-73934ce38cce9a2bf3ac84bc9';
// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   params: {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//     key: API_KEY,
//   },
// });

// const getImages = async (query, page) => {
//   const { data } = await instance.get(`?q=${query}&page=${page}`);

//   return data;
// };

// export class JsonPixabayApi {
//   static URL = 'https://pixabay.com/api/';
//   static API = '36975301-73934ce38cce9a2bf3ac84bc9';

//   async fetchFromAPi(query, page) {
//     const searchParams = new URLSearchParams({
//       key: JsonPixabayApi.API,
//       q: query,
//       image_type: 'photo',
//       page: page,
//       per_page: 12,
//       orientation: 'horizontal',
//       safesearch: true,
//     });
//     // return axios.get(`${JsonPixabayApi.URL}?${searchParams}`)
//     return await axios.get(`${JsonPixabayApi.URL}?${searchParams}`);
//     .then(response => {
//     if (!response.ok) {
//         throw new Error(response.status)
//     }
//     return response.json();
// })
// export { getImages };
