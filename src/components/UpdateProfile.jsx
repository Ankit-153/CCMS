import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../utilities/UserSlice"; // Update this path according to your project structure
import { updateUser } from "../api/UpdateUserApi"; // Update this path according to your project structure
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user); // Get user from Redux store
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    // Local state to handle updates
    const [updatedUser, setUpdatedUser] = useState({ ...user });

    // Check if the user is logged in
    useEffect(() => {
        if (!user || Object.keys(user).length === 0 || !user.email) {
            navigate("/login"); // Redirect to login if user is not logged in
        }
    }, [user, navigate]);

    // Handle input change
    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUser(updatedUser); // Call API to update user
            dispatch(setUser(updatedUser)); // Update user in Redux store
            // alert("Profile Updated Successfully!");
            toast.success("Profile Updated",{position:"top-right" ,autoClose:3000});
        } catch (err) {
            toast.error("Update failed",{position:"top-right" ,autoClose:3000});
        }
    };

    return (
        <>
        <ToastContainer/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* User Details Card */}
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-center mb-4">User Profile</h2>
                <div className="text-gray-700 space-y-2">
                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Category:</strong> {user.category}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Home State:</strong> {user.homeState}</p>
                    <p><strong>JEE Mains Rank:</strong> {user.jeeMainsRank}</p>
                    <p><strong>JEE Advanced Rank:</strong> {user.jeeAdvancedRank}</p>
                </div>
            </div>

            {/* Update Profile Form */}
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={updatedUser.firstName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={updatedUser.lastName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="number"
                            name="jeeMainsRank"
                            value={updatedUser.jeeMainsRank}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            placeholder="JEE Mains Rank"
                        />
                        <input
                            type="number"
                            name="jeeAdvancedRank"
                            value={updatedUser.jeeAdvancedRank}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            placeholder="JEE Advanced Rank"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                            name="password"
                            value={updatedUser.password}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                            className="absolute right-2 top-2 text-sm text-blue-500"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <input
                        type="text"
                        name="category"
                        value={updatedUser.category}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="Category"
                    />
                    <input
                        type="text"
                        name="gender"
                        value={updatedUser.gender}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="Gender"
                    />
                    <input
                        type="text"
                        name="homeState"
                        value={updatedUser.homeState}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="Home State"
                    />



                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default UpdateProfile;