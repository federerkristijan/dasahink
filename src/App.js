import * as React from "react";
// import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// import useContentful from "./useContentful";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Art from "./views/Art";
import Domination from "./views/Domination";
import Film from "./views/About";
import Music from "./views/About";
// import DataCard from "./DataCard";

import './App.css';

function App() {
  // const [data, setData] = useState([]);
  // const { getData } = useContentful();

  // useEffect(() => {
  //   getData().then((response) => setData(response))
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWithNavbar />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Art" element={<Art />} />
          <Route path="domination" element={<Domination />} />
          <Route path="Film" element={<Film />} />
          <Route path="music" element={<Music />} />
        </Route>
      </Routes>
      {/* {
        data.map((data, index) => <DataCard key={index} data={data} />)
      } */}
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
