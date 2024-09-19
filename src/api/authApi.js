export const login = async () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };
  
  export const logout = async () => {
    // Here you can call an API to handle logout or just clear the token in local storage
    window.location.href = 'http://localhost:5000/auth/logout';
  };
  