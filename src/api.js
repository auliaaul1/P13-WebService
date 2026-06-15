import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "x-api-key": "free_user_3F9nECim8YIqtwruo073Sw0m0Ox",
  },
});

export default api;
