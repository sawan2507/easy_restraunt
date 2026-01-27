import axios from "axios";
import MEDIA_URL from "./media";

const api = axios.create({
  // baseURL: `http://localhost:5000/api/`, // your base URL
  baseURL: `${MEDIA_URL}api/`, // your base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;