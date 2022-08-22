import * as React from "react";
// import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// import useContentful from "./useContentful";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Blog from "./views/Blog";
import Domination from "./views/Domination";
import Film from "./views/Film";
import Music from "./views/Music";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="Art" element={<Art />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="domination" element={<Domination />} />
          <Route path="Film" element={<Film />} />
          <Route path="music" element={<Music />} />
          </Route>
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );

  // function LayoutWithNavbar() {
  //   return (
  //     <>
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   );
  // }
}

export default App;
