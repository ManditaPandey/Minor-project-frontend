import { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import TopComics from "./components/TopComics";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Reader from "./pages/Reader";
import Upload from "./pages/Upload";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); 
  const showTopComics = location.pathname === "/";

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/login">Login</Link>
        <Link to="/upload">Upload Comic</Link> 
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {showTopComics && <TopComics />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reader" element={<Reader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} /> 
      </Routes>
    </div>
  );
}
