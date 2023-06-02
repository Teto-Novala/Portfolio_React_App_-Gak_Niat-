import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Medsos from "./pages/Medsos";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="App">
      <div className="judul-web">Portfolio yang Tidak Niat</div>
      <nav className="nav-list">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/profile" className="nav-item">
          Profile
        </Link>

        <Link to="/blog" className="nav-item">
          Blog
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="profile" element={<Profile />} />
        <Route path="medsos" element={<Medsos />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
