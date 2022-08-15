import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// import { Home, About, Art, Domination, Film, Music } from "./views/";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Domination from "./views/Domination";
import Film from "./views/About";
import Music from "./views/About";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dasa Hink</h1>
      <Routes>
        <Route path="/" element={<LayoutWithNavbar />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Art />} />
          <Route path="Domination" element={<Domination />} />
          <Route path="Film" element={<Film />} />
          <Route path="Music" element={<Music />} />
        </Route>
      </Routes>
    </div>
  );

  function LayoutWithNavbar() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default App;
