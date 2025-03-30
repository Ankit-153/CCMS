



import axios from 'axios';
import { API_URL } from '../constants';

 const signupUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/profile`, user, { withCredentials: true });

        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error("Signup error:", error.response?.data?.message || error.message);
        throw error;
    }
};

export { signupUser };
