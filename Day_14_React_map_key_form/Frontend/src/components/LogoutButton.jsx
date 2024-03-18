const LogoutButton = ({ handleLogout}) => {
  return (
    <div>
      <h2>Welcome, you are logged in!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
