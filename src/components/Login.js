import React from 'react';
import { useAuth } from '../context/authContext';

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login with Google</button>
    </div>
  );
};

export default Login;
