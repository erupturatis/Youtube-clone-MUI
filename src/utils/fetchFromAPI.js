import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: { maxResults: 50 },
  headers: {
    'X-RapidAPI-Key': 'f41b56caaamsh3b920ddfa2a8830p119004jsn3943ce7e7af3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
