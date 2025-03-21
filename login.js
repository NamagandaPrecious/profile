import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "precious" && password === "1234567890") {
      const userData = { username };
      setIsAuthenticated(userData);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(userData));

      setTimeout(() => navigate("/profile"), 100); // Ensures state updates before navigation
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
