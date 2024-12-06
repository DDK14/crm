import axios from 'axios';

const BASE_URL = 'http://localhost:8081';

export const getCustomers = async () => {
  try {
    const response = await axios.get(BASE_URL,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};
