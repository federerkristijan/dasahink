import * as React from "react";
// import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route , Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Blog from "./views/Blog";
import Domination from "./views/Domination";
import Film from "./views/Film";
import Music from "./views/Music";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="art" element={<Art />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/domination" element={<Domination />} />
              <Route path="/film" element={<Film />} />
              <Route path="/music" element={<Music />} />
              <Route element={NotFound} />
          </Route>
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </BrowserRouter>
  );

  function Layout() {
    return (
      <>
        {/* <Navbar /> */}
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
