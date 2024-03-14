const Logout = () => {
  const handleLogout = () => {
    // Clear access token from local storage
    localStorage.removeItem('accessToken');
    // Redirect to home page or login page
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
