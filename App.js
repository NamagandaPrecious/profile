import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Media from "./components/Media";
import Academics from "./components/Academics";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login.js";
import Profile from "./Profile.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("darkmode") === "active") {
      setDarkMode(true);
      document.body.classList.add("darkmode");
    }

    // Retrieve stored user info
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", null);
      setDarkMode(false);
    } else {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
      setDarkMode(true);
    }
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="App">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/profile" replace />
              ) : (
                <Login setIsAuthenticated={handleLogin} />
              )
            }
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile user={user} onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
        </Routes>

        {isAuthenticated && (
          <main>
            <About />
            <Media />
            <Academics />
            <Career />
            <Contact />
          </main>
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
