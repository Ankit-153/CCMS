import axios from "axios";
import { API_URL } from "../constants";




 const loginUser = async (email, password) => {
    try {
        // const response = await axios.post(`${API_URL}/login`, { email, password });
        // console.log("Login successful:", response.data);
        // return response.data;

           const response = await axios.post(
            `${API_URL}/login`,
            { email, password },
            { withCredentials: true } //Allows cookies from backend
        );
        console.log(response);
        console.log("Login successful!");
        return response.data; // Returns user details (if any)

    } catch (error) {
        console.error("Login error:", error.response?.data?.message || error.message);
        throw error;
    }
};


const logoutUser = async () => {
    try {
        await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
        console.log("Logged out successfully!");
    } catch (error) {
        console.error("Logout error:", error.response?.data || error.message);
    }
};

export { loginUser,logoutUser };
