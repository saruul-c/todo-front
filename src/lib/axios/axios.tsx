

// const API_URL = 'http://localhost:3100/api';


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

// export default backend;
