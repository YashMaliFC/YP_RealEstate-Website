import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':  '997d8891a0mshbbf9e8764295000p19dc87jsn892b10c95aef',
    },
  });
    
  return data;
}
 