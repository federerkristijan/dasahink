import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
//  credtis to https://github.com/react-ga/react-ga
import ReactGA from "react-ga";
// credits to https://github.com/Mastermindzh/react-cookie-consent
import CookieConsent from "react-cookie-consent";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
// import About from "./views/About";
import Art from "./views/Art";
import Blog from "./views/Blog";
import Domination from "./views/Domination";
import Film from "./views/Film";
import Music from "./views/Music";
import News from "./views/News";
import Contact from "./views/Contact";
import NotFound from "./NotFound";
import "./App.css";

ReactGA.initialize(process.env.REACT_APP_GA_MEASURMENT_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="art" element={<Art />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/domination" element={<Domination />} />
            <Route path="/news" element={<News />} />
            <Route path="/film" element={<Film />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={NotFound} />
          </Route>
        </Routes>
        <CookieConsent
          enableDeclineButton
          onAccept={() => {
            localStorage.setItem('cookies_enambled', '1');
          }}
          onDecline={() => {
            localStorage.setItem('cookies_enabled', '0');
          }}
          setDeclineCookie={true}
          flipButtons={true}
          style={{ textAlign: "center", background: "grey" }}
          overlay={true}
          buttonStyle={{ borderRadius: "7px", background: "rgb(214, 184, 158)" }}
          declineButtonStyle={{ borderRadius: "7px", background: "rgb(54, 42, 51)" }}
        >
          🍪 This site uses cookies. 🍪
        </CookieConsent>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </BrowserRouter>
  );

  function Layout() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default App;
