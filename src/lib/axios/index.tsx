import axios from "axios";

const URL = process.env.NEXT_PUBLIC_ENTRYPOINT;

// Function to log in the user
export const login = async (username: string, password: string) => { // Specify types for username and password
  try {
    console.log(URL);

    const response = await axios.post(`http://localhost:3100/api/users/login`, {
      username,
      password
    });
    if (response.data.accessToken) {
      // Save the JWT in local storage
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to log out the user
export const logout = () => {
  localStorage.removeItem('user');
};

// Function to register the user
export const register = async (username: string, email: string, password: string) => { // Specify types for username, email, and password
  try {
    const response = await axios.post(`${URL}/register`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Function to get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};

export enum REQUEST_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
}

const axiosTodo = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});


export { axiosTodo, URL };
