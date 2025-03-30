import React, { useState } from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
import {API_URL} from '../constants.jsx';
import {loginUser} from '../api/loginApi.jsx';
import { useSelector ,useDispatch} from 'react-redux';
import { getUser } from '../api/getUser.jsx';
import { setUser } from '../utilities/UserSlice.jsx';



function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        await loginUser(email, password);
        const userData= await getUser();
        dispatch(setUser(userData));
        navigate('/');
    }
    catch(error){
      console.error("Login error:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || error.message);
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Welcome Back</h2>
        <p className="mb-6 text-sm text-center text-gray-600">
          Please login to your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <NavLink to="/Signup" className="text-blue-500 hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
