
import axios from "axios";
import { API_URL } from "../constants";

export const getUser = async () => {
    try {
        // 🔹 Fetch user profile from the server
        // console.log("API_URL", API_URL);
        const response = await axios.get(`${API_URL}/profile`, {
            withCredentials: true, // 🔹 Ensures cookie (token) is sent
        });
        return response.data; 

    } catch (error) {
        console.error("Profile fetch error:", error.response?.data?.message || error.message);
        throw error; // 🔹 Rethrow the error for handling in the calling function
    }
};