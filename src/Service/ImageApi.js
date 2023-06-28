import axios from 'axios';

const API_KEY = '36975301-73934ce38cce9a2bf3ac84bc9';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  headers: { Authorization: API_KEY },
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (query, page) => {
  const { data } = await instance.get(`search?query=${query}&page=${page}`);

  return data;
};

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
