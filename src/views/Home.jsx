import React from "react";
// import Insta from "../components/Insta";
import SubscribeForm from "../components/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-image">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584001616265-906OPLNYWFUPJSTCP7PB/finished+2.jpg?format=750w"
            alt="home pic"
          />
        </div>
        <div className="home-text">
          <div className="home-title">
            <h1>Hey babies</h1>
          </div>
          <div className="home-description">
            <span>
              So nice of you to come for a visit. This is the home of Dasa Hink,
              an artist, a film maker, a musician and a public activist. I've
              collected some art and writing for you to enjoy, plus some more
              info about me and some stuff im up to. Please do follow me on
              instagram or register for the mailing list to get info about
              concerts, BDSM tours, or other shenanigans I'm up to.
            </span>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <p>Sign up with your email to subscribe!</p>
        <SubscribeForm />
      </div>
      <div className="home-insta">
        {/* <Insta /> */}
      </div>
    </div>
  );
};

export default Home;
