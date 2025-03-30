import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { signupUser } from '../api/signUpApi';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SignUp() {
    const navigate=useNavigate();
    
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
    gender: '',
    homeState: '',
    jeeMainsRank: '',
    jeeAdvancedRank: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.jeeMainsRank && !formData.jeeAdvancedRank) {
      newErrors.rankError = 'At least one rank is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;


  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (validateForm()) {

        try{
          await signupUser(formData);
          toast.success("Signup successful",{position:"top-center",autoClose:3000});
          navigate('/login');
        }
        catch{
          toast.error("Signup failed. Try again.",{position:"top-center",autoClose:3000});
        }
    
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-800">Create Your Account</h2>
        <p className="mb-8 text-center text-gray-600">Unlock the Best College Matches Based on Your Rank!</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select your category</option>
                <option value="General">General</option>
                <option value="OBC">OBC-NCL</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
            </div>
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="homeState" className="block mb-2 text-sm font-medium text-gray-700">
              Home State
            </label>
            <input
              type="text"
              id="homeState"
              name="homeState"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.homeState}
              onChange={handleChange}
              placeholder="Enter your home state"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
            <div>
              <label htmlFor="jeeMainsRank" className="block mb-2 text-sm font-medium text-gray-700">
                JEE Mains Category Rank
              </label>
              <input
                type="number"
                id="jeeMainsRank"
                name="jeeMainsRank"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.jeeMainsRank}
                onChange={handleChange}
                placeholder="Enter your JEE Mains rank"
              />
            </div>
            <div>
              <label htmlFor="jeeAdvancedRank" className="block mb-2 text-sm font-medium text-gray-700">
                JEE Advanced Category Rank
              </label>
              <input
                type="number"
                id="jeeAdvancedRank"
                name="jeeAdvancedRank"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.jeeAdvancedRank}
                onChange={handleChange}
                placeholder="Enter your JEE Advanced rank"
              />
            </div>
            {errors.rankError && <p className="text-sm text-red-500">{errors.rankError}</p>}
          </div>
          <button
            type="submit"
            className="w-full mt-8 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;