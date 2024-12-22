import React from 'react';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;