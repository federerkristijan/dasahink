import React, { useEffect, useState } from "react";
import {sanityClient} from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";

const Blog = () => {
  const [blog, setBlog] = useState(false);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blogCard"] | order (_cratedAt asc) {
          title,
          text,
          image
        }`
      )
      .then((data) => setBlog(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog">
      <div className="blog-card">
        <div className="b-title">
          <h1>Fun loving dominance</h1>
        </div>
        <div className="b-text">
          <p>
            A classic mistake I see new dominatrixs make, is that they
            immediately default to acting out the most obvious dominant women
            archetype. This mythical type of women is stern, domineering,
            assertive and stiff. The type of person that a millennial like me
            would avoid at any cost. The type of women who will judge us for our
            creativity and say how we 'should' behave. We opt for this archetype
            because we think thats the meaning of dominance, and thats the kind
            of symbol we see in our heads from all those years of unconsciously
            consuming BDSM culture. There is however a dominant sadistic type of
            feminin that is much more close to home for someone like me. The
            playful, curious, innocently sadistic wild child. The ecstasy felt
            by a toddler being chased by his older sibling is obvious to
            everyone in the vicinity. The full attention to himself, the knowing
            he is well and loved, but with a sparkle of exciting fear. The chase
            itself and the sensation of running and escaping, creates a kind of
            pleasant and energising sensation in the body. The dominant older
            child in this game usually knows the limits that they can get away
            with, but is also not afraid to explore and go a tiny bit too far.
            He is also taken away by the whimsy and does not calculate his next
            move, he's just experimenting with his physical force and three
            dimensional space, flipping his little brother around and enjoying
            his screams of joy. I recently invited a few girlfriends to join me
            on a Saturday morning session for a special costumer of mine who I
            really like to play with. He booked a long session and I wanted to
            give him a special treat. On my facebook wall I posted a cryptic
            message that those who know what I do will understand, and 3
            girlfriends showed up at the studio curious and open minded. Non of
            us knew what would exactly happen, and I assured everybody they have
            zero obligations, they can just watch, or play, or leave if they are
            uncomfortable. The costumer came in, gaged and tied up. My three
            lady friends were sitting and watching us interacting. There were a
            few moments where the atmosphere was still unclear, to which
            direction it will take. A few seconds of awkwardness where I had to
            control him and the room with my confidence. There was no need to
            make a big complicated show out of it. Casually I reached for the
            duckt tape and tried out a new bondage position which I knew he
            would like. That left him naked and exposed, with his face facing
            the floor, away from the audience. The atmosphere in the room became
            light and playful, as I was casually explaining what Im about to do
            and just chatting with my friends like in real life, each sharing
            our experiences. We were all excited about our sexy play toy, but
            with such a casual easy going vibe. The ladies felt free to just
            watch and laugh and get curious, while I was planting the seed that
            they could come and play with him if they wanted. Whatever they were
            curious about they can try. Someone wanted to try flogging. It was
            the perfect position and the perfect timing! After the first few
            strokes things got heated up. Everybody was off their seat,
            cheering, laughing, spanking, leaving all kinds of marks. Our play
            partner could not really see who hit when, and he screamed with pain
            and delight and surrendered to us, surrounding him. From there on
            things just rolled and escalated. Somebody wanted to try anal, and
            we each had a go, finding his prostate and stimulating it. Then
            candle wax, hair pulling, nipple pinching….By then he was on his
            back, looking up at all of us, screaming as we got more and more
            deliciously sadistic with him. There was so much laughter in the
            room, and excited chatter. Like a bunch of cubs lovingly playing
            with each other, rolling around and being silly. Curiosity leading
            the way and excitement and trust. I felt like all us ladies were
            transported to a carefree moment in childhood were everything was
            allowed, and we just inspired each other and went with the flow!
            This is the kind of unpretentious dominance that I love. Acting,
            being childish, being silly, being theatrical, experimenting, thats
            the idea of play! And BDSM is all about playing. Whenever I make the
            mistake of taking things too seriously I always trip myself up, feel
            fake and bored. Playing means you don't always know what you are
            doing, you are exploring your possibilities, experimenting with your
            power. Pretending like I know everything could be fun as a part of
            the game, but if I start to believe it myself I become robotic and
            inauthentic. If I repeat what I know without being open to
            inspiration I will never learn and grow. This is the best practice
            for playfulness in life!
          </p>
        </div>
        {blog &&
          blog.map((item) => (
            <div className="b-data" key={item.title}>
              <div className="b-image-data">
                {item.image && (
                  <img
                    src={urlFor(item.image).width(200).url()}
                    alt={item.title}
                    className="blog-image"
                  />
                )}
              </div>
              <div className="b-title-data">
                <h2>{item.title}</h2>
              </div>
              <div className="b-text-data">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
