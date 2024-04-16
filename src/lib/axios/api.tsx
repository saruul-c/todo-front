import { axiosTodo } from ".";

export const API = {
  user: {
    login: ({}: { userName: string; password: string }) =>
      axiosTodo.post("/api/v1/user/login", {}),
  },
};
