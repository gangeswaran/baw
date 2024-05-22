import axios from 'axios';

export const searchPlaces = async (searchTerm) => {
  try {
    const response = await axios.get('https://baw1.onrender.com/api/getplaces/', {
      params: {
        keyword: searchTerm
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
