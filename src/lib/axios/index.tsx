// import { backend } from "./axios";

// console.log("NEXT_PUBLIC_ENTRYPOINT:", process.env.NEXT_PUBLIC_ENTRYPOINT);
// const URL = process.env.NEXT_PUBLIC_ENTRYPOINT;

// // Function to log in the user
// export const login = async (username: string, password: string) => {
//   // Specify types for username and password
//   try {
//     console.log("URL:", URL);

//     console.log("Username:", username);
//     console.log("Password:", password);
//     const response = await backend.post(
//       `/users/login`,
//       {
//         username,
//         password,
//       }
//     );

//     console.log("Response:", response.data);
    
//     if (response.data.accessToken) {
//       // Save the JWT in local storage
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// };

// // Function to log out the user
// export const logout = () => {
//   localStorage.removeItem("user");
// };

// // Function to register the user
// export const register = async (
//   username: string,
//   email: string,
//   password: string
// ) => {
//   // Specify types for username, email, and password
//   try {
//     const response = await backend.post(`${URL}/register`, {
//       username,
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error;
//   }
// };

// // Function to get current user
// export const getCurrentUser = () => {
//   const userStr = localStorage.getItem("user");
//   if (userStr) return JSON.parse(userStr);
//   return null;
// };



// // Function to fetch all tasks
// export const fetchAllTasks = async () => {
//   try {
//     const response = await backend.get(`/todos/getAllTasks`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     throw error;
//   }
// };

// // Function to create a new task
// export const createTask = async (task: any) => {
//   try {
//     const response = await backend.post(`/todos/createTask`, task);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating task:", error);
//     throw error;
//   }
// };

// // Function to update an existing task
// export const updateTask = async (taskId: any, taskUpdates: any) => {
//   try {
//     const response = await backend.put(`/api/tasks/${taskId}`, taskUpdates);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating task:", error);
//     throw error;
//   }
// };

// // Function to delete a task
// export const deleteTask = async (taskId: any) => {
//   try {
//     const response = await backend.delete(`/api/tasks/${taskId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting task:", error);
//     throw error;
//   }
// };


// export enum REQUEST_METHODS {
//   GET = "GET",
//   POST = "POST",
//   PUT = "PUT",
//   PATCH = "PATCH",
// }



// export {URL };
