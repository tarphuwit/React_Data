import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Team from "./components/Team";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
