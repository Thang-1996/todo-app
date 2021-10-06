import axios from "axios";

const api = axios.create({
  baseURL: "",
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const services = {
  login: (data) =>
    api.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZdrxo-aWfve2GDghyeR_2Zhv1WvB9HP0`,
      data
    ),
};

export default services;
