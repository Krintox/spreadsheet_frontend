import React from 'react';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
