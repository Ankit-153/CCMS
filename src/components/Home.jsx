import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    console.log(user.email);
    useEffect(() => {
        if (!user.email) {
            navigate('/login');
        }
    }, [user.email]);
   
    return (
        <>
        <div>
            <h1>Welcome to the Home Page</h1>
        </div>
        </>
    );
};

export default Home;