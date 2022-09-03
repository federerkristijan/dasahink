import React from "react";
import { artImg } from "./data";

const Art = () => {
  return (
    <div className="art">
      <div className="art-card">
        <div className="art-title">
          <span>
            Here are some photography and sculptural projects I did in the last
            years. I usually create a concept to shoot, make the designs, invite
            some muses to participate or model myself. I work with exceptional
            photographers such as{" "}
            <a href="https://tobijall.wixsite.com/my-site">Tobi Jall</a>.
          </span>
        </div>
        <div className="art-image">
          {artImg.image.map(({ id, img, height, width, description }) => (
            <span key={id}>
              <img
                className="images"
                src={img}
                alt={id}
                height={height}
                width={width}
              />
              <p>{description}</p>
            </span>
          ))}
        </div>
        <div className="art-image">
          <div className="art-duo">
            <img src={require("../assets/images/art/art4a.jpg")} alt="" />
            <img src={require("../assets/images/art/art4b.jpg")} alt="" />
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art/art5a.jpg")} alt="" />
            <img src={require("../assets/images/art/art5b.jpg")} alt="" />
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art/art6a.jpg")} alt="" />
            <img src={require("../assets/images/art/art6b.jpg")} alt="" />
          </div>
          <div className="duo-desc">
            <span>
              Right: <a href="https://mubi.com/cast/parker-marx">Parker Marx</a>{" "}
              and myself. Left:
              <a href="https://www.comisjessica.com/">Jessica Comis</a> and
              myself
            </span>
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art/art10.jpg")} alt="" />
            <img src={require("../assets/images/art/art10.jpg")} alt="" />
          </div>
          <div className="duo-desc">
              <span>
                This sculpture, the PetPod, is a redesign for the sex toy:
                Fleshlight. It is a usable sculpture who have traveled with me
                to different talks and exhibitions.
              </span>
          </div>
          <div className="art-duo">
            <img src={require("../assets/images/art/art15a.jpg")} alt="" />
            <img src={require("../assets/images/art/art15b.jpg")} alt="" style={{ minWidth:"32vw" }}  />
          </div>
        </div>
        <div className="art-image">
          <div className="art-trio">
            <img src={require("../assets/images/art/art7.jpg")} alt="" />
            <img src={require("../assets/images/art/art8.jpg")} alt="" />
            <img src={require("../assets/images/art/art9.jpg")} alt="" />
          </div>
          <div className="art-trio">
            <img src={require("../assets/images/art/art16.png")} alt="" height={"250px"} min-width={"160px"} />
            <img src={require("../assets/images/art/art17.jpg")} alt="" height={"250px"} min-width={"160px"} />
            <img src={require("../assets/images/art/art18.jpg")} alt="" height={"250px"} min-width={"160px"} />
          </div>
          <div className="trio-desc">
            <span>
              Circles and Lines is a video installation I created for the
              exhibition “Adornism”
            </span>
            <br />
            <span>Music, performance and direction: Hadas Hinkis</span>
            <br />
            <span>
              Camera and light design:{" "}
              <a href="www.tomrotsch.com">Tom Rotsch</a>
            </span>
            <br />
            <span>
              Hands:{" "}
              <a href="https://www.instagram.com/theomegapoint0/?hl=en">
                Alexandra Moon
              </a>
            </span>
            <br />
            <span>
              A project with photographer{" "}
              <a href="https://www.instagram.com/epiczambo/">Dark as Ink</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
