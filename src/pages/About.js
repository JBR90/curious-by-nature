import React from "react";
import Footer from "../layout/Footer";
import hero from "../images/chang-duong-KrfID_ZQxWs-unsplash.jpg";
import landingPic1 from "../images/anna-samoylova-w55SpMmoPgE-unsplash.jpg";

const About = () => {
  return (
    <div>
      <div className="   z-30  w-screen h-screen  ">
        {/* ----------------------------------------------------------------------------------- // hero // */}

        <div className=" relative  w-full  h-3/6  md:h-4/6 ">
          <img
            className="object-cover object-center
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
          <div className=" bg-background-green   ">
            <div className=" lg:w-4/5 m-auto  w-full grid grid-cols-1 bg-yellow px-4 py-4">
              <h1 className="   bottom-56  w-full text-black text-1xl font-semibold  py-4  lg:text-3xl">
                {`Curious by Nature London aims to provide outdoor learning opportunities to the local community, especially children and young people; to foster an understanding of self-directed education and to raise environmental and climate awareness by promoting sustainable living and care for local resources.`}
              </h1>
              {/* <p className=" bottom-56  w-full text-black text-2xl font-thin px-5 py-4">
                {`Our mission is to create international consensus
around the climate emergency, as well a shared
plan for saving the planet’s most exceptional wild places.`}
              </p> */}
            </div>
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
                  Families, children and young people will benefit from quality
                  outdoor education, facilitated by skilled practitioners. These
                  sessions will provide opportunities for those involved to
                  improve their skills, knowledge, physical and mental health,
                  and gain self-confidence. The young people and families will
                  benefit by networking with local community members and
                  organisations for learning opportunities as well as
                  strengthening the connection to the local area and green
                  spaces in particular.
                </p>
                {/* <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------// Text + Image section 2 // */}
          <div className="w-full bg-white my-8">
            <div className=" sm:justify-center lg:w-4/5 m-auto px-4  grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center px-4 order-2 md:order-1">
                <h1 className="  text-center sm:text-left mt-4  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                  Self-directed education
                </h1>
                <p className="mb-4 md:text-1xl  lg:text-2xl">
                  In a self-directed education setting young people will benefit
                  from re-engaging with their innate capacity for learning. They
                  will be empowered by the opportunity to explore their natural
                  curiosity and playfulness, whilst participating in a learning
                  community where each voice is valued, and activities are
                  co-created by participation in democratic processes that
                  involve consent. The young people will benefit from having a
                  safe space for unlimited, unstructured play opportunities for
                  learning and development. Children and young people will learn
                  from each other in mixed age groups. They will practice
                  communicating their needs effectively, balance their
                  individual needs with their community's needs and solve
                  problems together. They will learn non violent communication
                  strategies for conflict resolution. These young people will
                  take these skills into their families and the wider community.
                </p>
                {/* <button className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded ">
                  Learn More
                </button> */}
              </div>
              <div className="flex justify-center order-1 md-order-2  ">
                <img
                  className="object-cover   overflow-hidden   w-11/12  "
                  src={landingPic1}
                  alt=""
                />
              </div>
            </div>
          </div>
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
