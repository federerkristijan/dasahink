import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Blog from "./Blog";

const Domination = () => {
  return (
    <div className="domination">
      <div className="domination-cover-image">
        <div className="cover-image">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5972489ff7e0ab52f5a63107/1584178415189-CF2R4FXLYH3C1XI2NR30/final-0434+crop.jpeg?format=750w"
            alt="cover-pic"
          />
        </div>
        <div className="subscribe-title">
          <h1>Subscripe to my Kink mailing list</h1>
          <br />
          <h3>if you want to get informed about talks, writings, and events!</h3>
        </div>
      </div>
      <div className="subscribe">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe to mailing list
          </Button>
        </Form>
      </div>
      <div className="domination-card">
        <div className="domination-card-image">
          <img src={require("../assets/images/dom/dom1.jpg")} alt="" />
        </div>
        <div className="domination-card-description">
          <span>
            Since over seven years I've been working as a professional
            Dominatrix in the sex industry. This job have had a significant
            influence over my life.
            <br />
            I've discovered myself anew as a beautiful and powerful women.
            <br />
            I've discovered how versatile sexuality and sensuality can be.
            <br />
            I've developed intimate relationships with clients I would otherwise
            never meet.
            <br />
            I've become aware of our messy contradicting attitudes towards
            sexuality
            <br />
            I've become aware of stigma and prejudice against those who work in
            the sex industry
            <br />
            I've met a ton of creatives, colleagues, and performers who are also
            interested in sexuality and sensuality.{" "}
          </span>
        </div>
      </div>
      <div className="domination-card">
        <div className="domination-card-description">
          <span>
            Seemed to me like what we do in the sex industry is important.{" "}
            <br />
            I have met so many clients who have been carrying around a fantasy
            their entire life, being too afraid to share it with their partner,
            even if its something so harmless as the love of feet.
            <br />
            I have met clients who are too shy, too different, or too introvert
            to find a girlfriend in the real world. I've met people who only
            enjoy a very specific kind of sexual activity, which is hard to find
            a fitting partner for.
            <br />
            The creativity that goes into role play, the delicate hand skills
            that are needed to touch another body in just the right way- I think
            these capabilities have a lot of value.{" "}
          </span>
        </div>
        <div className="domination-card-image">
          <img src={require("../assets/images/dom/dom2.jpeg")} alt="" />
        </div>
      </div>

      <div className="domination-card">
        <div className="domination-card-image">
          <img src={require("../assets/images/dom/dom3.jpg")} alt="" />
        </div>
        <div className="domination-card-description">
          <span>
            This is a part of the reason I have decided to be 'out of the
            closet' about sex work. Talk openly about my experiences, answer
            questions, share what I know.
            <br />
            I think the more we show our true colours, the less there is to be
            ashamed of.
            <br />
            It's inspiring to me to see others be who they really are!
            <br />
            My creativity goes very well with sensuality and sexuality. Working
            in this field have inspired me, because there are so many facets and
            depth to our human need for connection, touch, and adventure.
            <br />
            There is so much yet to be discovered!
            <br />
            Since working in this industry I have directed an artistic erotic
            film for{" "}
            <a href="https://xconfessions.com/collaborators/directors/erika-lust">
              Erika Lust
            </a>
            , created sex toy sculptures, made props for the wonderful{" "}
            <a href="https://www.sexschoolhub.com/">Sex School</a>, costumes for
            Shu Lea Chiang's thought provoking film{" "}
            <a href="https://vimeo.com/341132412">3x3x6</a>, have been
            interviewed about sex work, and met and worked with so so many like
            minded people.
            <br />
            There is an ever growing community of proud sex workers, activists,
            and feminists, and so I'm happy to contribute my share even just by
            writing these words. I dont think I will do this job forever, but it
            has given me so much that its the least I can do.
          </span>
        </div>
      </div>

      <div className="bdsm">
        <div className="bdsm-title">
          <h5>
            Check out my fun {""}
            <a href="https://www.airbnb.com/experiences/530915">
              BDSM Studio tour in Berlin
            </a>
            !!
          </h5>
          <h6>View On AirbnbExplore the world of Kink with a pro</h6>
        </div>
      </div>
      <div className="blog-link">
        <a href="blog">Check out more over here in my blog</a>
      </div>
    </div>
  );
};

export default Domination;
