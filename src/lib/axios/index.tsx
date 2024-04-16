import axios from "axios";

const URL = process.env.NEXT_PUBLIC_ENTRYPOINT;

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
