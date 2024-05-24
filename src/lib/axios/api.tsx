import axios from 'axios';

//Axios дээр үндсэн Url толгой хэсгийг оруулсан код
const API_BASE_URL = process.env.NEXT_PUBLIC_ENTRYPOINT;
const backend = axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // withCredentials: true
});
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRzZXRzZWdlZSIsImlhdCI6MTcxNjI4OTYxNCwiZXhwIjoxNzE2ODk0NDE0fQ.nrQdhzQBfN2P9NtqEbLJWzdPjyWnMMmxLRcbiWiTens';

// // Токен сэргээх
// async function refreshToken() {
//   const refreshToken = localStorage.getItem('refreshToken');
//   if (!refreshToken) throw new Error('Дахин сэргээх токен байсангүй');

//   const { data } = await backend.post('/users/refresh-token', { refreshToken });
//   localStorage.setItem('accessToken', data.accessToken);
//   return data.accessToken;
// }

// // Axios interceptor to include the token in the request headers
// backend.interceptors.request.use(config => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // Axios саатуулагч token дуусах хугацааг зохицуулах
// backend.interceptors.response.use(response => response, async (error) => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     try {
//       const accessToken = await refreshToken();
//       originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//       return backend(originalRequest);
//     } catch (refreshError) {
//       console.error('Токен сэргээх амжилтгүй болсон шүү', refreshError);
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//     }
//   }
//   return Promise.reject(error);
// });

// localStorage-с хэрэглэгчийн хадгалсан мэдээллийг авах
const getAuthHeaders = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    // Authorization: `Bearer ${user.accessToken}`
    Authorization: `Bearer ${user.accessToken || token}`
  };
};
export const login = async (username: string, password: string) => {
  try {
    console.log(URL);
    console.log('test1');
    const response = await backend.post('/users/login', { username, password });
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      console.log('Нэвтрэлт амжилттай:', response.data);
    }
    return response.data;
  } catch (error) {
    console.error('Нэвтрэх алдаа:', error);
    handleError(error);
  }
};

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await backend.post('/users/register', { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Бүртгэлийн алдаа:', error);
    handleError(error);
  }
};

export const fetchUserData = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await backend.get('/api/users/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAllTasks = async () => {
  try {
    const response = await backend.get('/api/todos/getAllTasks', {
      headers: getAuthHeaders(),
    });
    console.log('Бүх даалгавруудыг татсан:', response.data);
    return response.data;
  } catch (error) {
    console.error('Даалгавар таталтын алдаа:', error);
    handleError(error);
  }
};

export const createTask = async (taskData: any) => {
  try {
    const response = await backend.post('/todos/createTask', taskData, {
      headers: getAuthHeaders(),
    });
    console.log('Даалгавар үүссэн шүү:', response.data);
    return response.data;
  } catch (error) {
    console.error('Даалгавар үүссэнгүй шүү:', error);
    handleError(error);
  }
};

export const updateTask = async (taskId: any, updates: any) => {
  try {
    const response = await backend.put(`/todos/${taskId}`, updates, {
      headers: getAuthHeaders()
    });
    console.log('Даалгаврыг шинэчилсэн:', response.data);
    return response.data;
  } catch (error) {
    console.error('Даалгаврыг шинэчилсэнгүй шүү:', error);
    handleError(error);
  }
};

export const updateTaskTime = async (taskId: number, timeToAdd: number) => {
  try {
    const response = await backend.post(`/todos/updateTime/${taskId}`, { timeToAdd }, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('Даалгаврын цагийг шинэчлэхэд гарсан алдаа:', error);
    handleError(error);
  }
};

export const deleteTask = async (taskId: any) => {
  try {
    const response = await backend.delete(`/todos/${taskId}`, {
      headers: getAuthHeaders()
    });
    console.log('Даалгаврыг устгасан:', response.data);
    return response.data;
  } catch (error) {
    console.error('Даалгаврыг устгасангүй шүү:', error);
    handleError(error);
  }
};

export const saveTaskTime = async (taskId: number, timeToAdd: number) => {
  try {
    const response = await backend.post(`/updateTime/${taskId}`, { timeToAdd }, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('Даалгаврын цаг хадгалахад гарсан алдаа:', error);
    handleError(error);
  }
  
};

const handleError = (error: any) => {
  if (error.response) {
    console.error('API алдаа:', error.response.data);
  } else if (error.request) {
    console.error('Хариу ирсэнгүй:', error.request);
  } else {
    console.error('Үл мэдэгдэх алдаа:', error.message);
  }
};

export enum REQUEST_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
};

// Export the API object
export const API = {
  user: { login, register },
  task: { getAllTasks, createTask, updateTask, updateTaskTime, deleteTask, saveTaskTime },
};

export default backend;

