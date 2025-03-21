import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome, {user ? user.username : "Guest"}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
