

import axios from "axios";
import { API_URL } from "../constants";

const updateUser =async (updateUser)=>{

    try{
         const response = await axios.patch(`${API_URL}/profile`, updateUser, {
            withCredentials: true, // 🔹 Ensures cookie (token) is sent
        });

        console.log("Profile updated successfully!");
    }
    catch(err){
        console.error("Update error:", err.response?.data?.message || err.message);
        throw   err;
    }
}

export {updateUser};