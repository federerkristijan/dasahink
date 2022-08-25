import * as React from "react";
// import { useEffect, useState } from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

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
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <main className="App">
          <Route path="/" component={<Home />}>
            <Route path="about" component={<About />} />
            <Route path="art" component={<Art />} />
            <Route path="blog" component={<Blog />} />
            <Route path="domination" component={<Domination />} />
            <Route path="film" component={<Film />} />
            <Route path="music" component={<Music />} />
            <Route component={NotFound} />
          </Route>
        </main>
      </Routes>
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
