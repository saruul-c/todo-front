// api.ts
import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_ENTRYPOINT;

export const login = async (username: string, password: string) => {
  try {
    console.log(URL);
    const response = await axios.post(`http://localhost:3100/api/users/login`, {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${URL}/user/register`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// other functions...

export const API = {
  user: {
    login, // This is where you include the login function
  },
  // other endpoints...
};
