import React from "react";
import Footer from "../layout/Footer";
import hero from "../images/about_hero.JPG";
import landingPic1 from "../images/about2.jpeg";
import landingPic2 from "../images/about1.jpeg";
import overlay3 from "../images/CBN_illustrations/PNG/scribble_2.png";
import overlay2 from "../images/CBN_illustrations/PNG/mushrooms.png";
import fullScreenPic from "../images/joel-jasmin-forestbird-xzPMUMDDsfk-unsplash.jpg";

const About = () => {
  return (
    <div>
      <div className="   z-30  w-screen h-screen  ">
        {/* ----------------------------------------------------------------------------------- // hero // */}

        <div className=" relative  w-full  h-3/6  md:h-4/6 ">
          <img
            className="  object-cover object-center
              overflow-hidden   w-screen h-full"
            src={hero}
            alt=""
          />
          {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-56  w-full  lg:w-4/5 py-4 px-4  ">
            <p className=" whitespace-pre-wrap  bottom-56  w-full text-white text-4xl ">
              {`Protecting natural habitats
from extinction.`}
            </p>
            <button className="bg-white hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded">
              Learn More
            </button>
          </div> */}
          {/* --------------------------------------------------------------------------------// small section // */}
          <div className=" bg-background-curious_green relative   ">
            <div className="absolute w-full flex justify-center  ">
              <img
                className=" w-full max-h-full object-fit overflow-hidden opacity-30"
                src={overlay3}
                alt=""
              />
            </div>
            {/* <div className=" lg:w-4/5 m-auto  w-full grid grid-cols-1 bg-yellow px-4 py-4">
              <h1 className="   bottom-56  w-full text-black text-1xl font-semibold  py-4  lg:text-3xl">
                {`We are a diverse community of families living in East London, brought together by our interest in playing and learning in nature. We meet in Beckton District Park South to climb trees, explore forest trails, play chase and dig for worms. We have come to realise there is no such thing as bad weather if you are having fun with friends.`}
              </h1>
              <p className=" bottom-56  w-full text-black text-2xl font-thin px-5 py-4">
                {`Our mission is to create international consensus
around the climate emergency, as well a shared
plan for saving the planet’s most exceptional wild places.`}
              </p>
            </div> */}
          </div>
          {/* --------------------------------------------------------------------------------// Text + Image section 1 // */}
          <div className="w-full bg-white my-8">
            <div className=" sm:justify-center lg:w-4/5 m-auto px-4  grid grid-cols-1 sm:grid-cols-2">
              <div className="flex justify-center   ">
                <img
                  className="object-cover   overflow-hidden   w-11/12  "
                  src={landingPic1}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center px-4">
                <h1 className=" text-center sm:text-left mt-4  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                  Outdoor learning
                </h1>
                <p className="mb-4 md:text-1xl  lg:text-2xl">
                  At Curious by Nature we aim to provide outdoor learning
                  opportunities to the local community, especially children and
                  young people; to foster an understanding of self-directed
                  education and to raise environmental and climate awareness by
                  promoting sustainable living and care for local resources.
                  <br></br>
                  <br></br>
                  Risk taking play is an integral part of our ethos. You’ll find
                  our group climbing trees, rolling down hills and navigating
                  natural obstacles. Through risk taking children are able to
                  gain confidence, develop motor skills, understand their own
                  abilities, better evaluate situations and build resilience. We
                  believe that these benefits outweigh the risks. Adults are
                  invited to take a step back and do not intervene unless
                  absolutely necessary.
                </p>
                {/* <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------// Text + Image section 2 // */}
          <div className="w-full bg-white my-8 ">
            <div className="absolute z-50 left-20 w-full grid grid-cols-8 ">
              <img
                className=" col-span-3 overflow-hidden opacity-30"
                src={overlay2}
                alt=""
              />
            </div>
            <div className=" sm:justify-center lg:w-4/5 m-auto px-4  grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center px-4 order-2 md:order-1">
                <h1 className="  text-center sm:text-left mt-4  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                  Self-directed education
                </h1>
                <p className="mb-4 md:text-1xl  lg:text-2xl">
                  We provide a mix of child-led free play as well as adult-led
                  sessions, such as family litter picks, foraging, using outdoor
                  tools, exploring bugs and worms, nature treasure hunts,
                  identifying local plants, shelter building, community
                  gardening and much more.
                  <br />
                  <br />
                  In our sessions children are empowered by the opportunity to
                  explore their natural curiosity and playfulness in a mixed age
                  group, whilst participating in a learning community where each
                  voice is valued. Committing to attend our sessions in the long
                  term is a great way to develop friendships and community
                  belonging. Children are able to practice balancing their
                  individual needs with the community’s and solve problems
                  together.
                </p>
                {/* <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button> */}
              </div>
              <div className="flex justify-center order-1 md-order-2  ">
                <img
                  className="object-cover   overflow-hidden   w-11/12  "
                  src={landingPic2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center relative bg-background-light w-full h-3/4 ">
            <img
              className="object-cover opacity-60 object-center
              overflow-hidden   w-screen h-full"
              src={fullScreenPic}
              alt=""
            />
            <div className=" m-auto absolute inset-0 text-center  w-full  lg:w-4/5 flex items-center ">
              <p className=" text-white leading-8 lg:text-2xl xl:text-3xl ">
                Through our play and learning activities we develop
                environmental and climate awareness and increase our knowledge
                of local ecosystems. Families benefit from sustainable living
                experiences and become aware of tools and resources to reduce
                the carbon footprint of their daily life. Come and join us!
              </p>
            </div>
          </div>
          {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-56  w-full  lg:w-4/5 py-4 px-4  ">
            <p className=" whitespace-pre-wrap  bottom-56  w-full text-white text-4xl ">
              {`Protecting natural habitats
from extinction.`}
            </p>
            <button className="bg-white hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded">
              Learn More
            </button>
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;

// Curious by Nature London aims to provide outdoor learning opportunities to the local community, especially children and young people; to foster an understanding of self-directed education and to raise environmental and climate awareness by promoting sustainable living and care for local resources.

// Outdoor learning:
// Families, children and young people will benefit from quality
// outdoor education, facilitated by skilled practitioners. These
// sessions will provide opportunities for those involved to improve
// their skills, knowledge, physical and mental health, and gain
// self-confidence.
// The young people and families will benefit by networking with
// local community members and organisations for learning
// opportunities as well as strengthening the connection to the local
// area and green spaces in particular.

// Self-directed education:
// In a self-directed education setting young people will benefit from
// re-engaging with their innate capacity for learning. They will be
// empowered by the opportunity to explore their natural curiosity and
// playfulness, whilst participating in a learning community where each voice is valued, and activities are co-created by participation in democratic processes that involve consent.
// The young people will benefit from having a safe space for
// unlimited, unstructured play opportunities for learning and
// development. Children and young people will learn from each other
// in mixed age groups. They will practice communicating their needs
// effectively, balance their individual needs with their community's
// needs and solve problems together. They will learn non violent
// communication strategies for conflict resolution. These young
// people will take these skills into their families and the wider
// community.

// Activities on environmental and climate awareness:
// Curious by Nature’s play and learning activities will develop the
// community’s environmental awareness and increase their
// knowledge of local plant and animal habitats. They will benefit
// from sustainable living experiences and be aware of tools and
// resources to reduce the carbon footprint of their daily life.
