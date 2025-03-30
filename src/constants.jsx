
import axios from "axios";
// const API_URL="http://localhost:3000";
// // const API_URL="http://192.168.241.93:3000";

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : 'https://ccms-backend-d8r3.onrender.com';

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, 
});



export {API_URL};
