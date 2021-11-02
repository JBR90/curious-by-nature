import React from "react";
// import hero from "../images/landing_hero.JPG";
import hero from "../images/hero2.jpeg";
import landingPic1 from "../images/landing_1.jpeg";
import landingPic2 from "../images/landing_2.JPG";
import overlay1 from "../images/CBN_illustrations/SVG/leaf_3.svg";
import overlay2 from "../images/CBN_illustrations/PNG/fruit.png";
import overlay3 from "../images/CBN_illustrations/PNG/scribble_1.png";
import Footer from "../layout/Footer";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div className=" w-full h-full  ">
      {/* <div className=" w-full z-50  h-full absolute top-2/3 py-48  grid grid-cols-4 overflow-hidden ">
        <img
          className=" h-full w-full col-span-2   opacity-0 md:h-60  "
          src={overlay2}
          alt=""
        />
        <img
          className="  h-full w-full col-span-2    opacity-30 xl:span-3 xl:w"
          src={overlay1}
          alt=""
        />
      </div> */}
      <div className="  z-30  w-screen h-screen    ">
        {/* ----------------------------------------------------------------------------------- // hero // */}

        <div className=" relative  w-full   h-3/4   ">
          <img
            className="object-cover object-right  overflow-hidden   w-screen h-full"
            src={hero}
            alt=""
          />
          {/* <div className=" z-50 absolute left-32 top-40 overflow-hidden   flex opacity-70 ">
          <img
            className="   col-start-3 col-span-2      "
            src={overlay3}
            alt=""
          />
        </div> */}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-56  w-full  lg:w-4/5 py-4 px-8 sm:px  ">
            <p className=" whitespace-pre-wrap  bottom-56  sm:leading-relaxed w-full text-white text-2xl sm:text-4xl ">
              {`Providing outdoor learning opportunities
to the local community.`}
            </p>

            <button
              onClick={(e) => history.push("/about")}
              className="bg-white hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded"
            >
              Learn More
            </button>
          </div>
          {/* --------------------------------------------------------------------------------// small section // */}
          <div className="  relative   ">
            {/* <div className=" w-full  h-full absolute   grid grid-cols-4 ">
              <img
                className=" h-full w-full col-span-2    opacity-0  "
                src={overlay2}
                alt=""
              />
              <img
                className="  h-full w-full col-span-2    opacity-30 xl:span-3 xl:w-/2"
                src={overlay1}
                alt=""
              />
            </div> */}
            {/* <div className=" lg:w-4/5 m-auto  w-full grid grid-cols-2 bg-yellow px-4 py-10">
            <h1 className="   bottom-56  w-full text-black text-3xl font-semibold  py-4 lg:text-4xl">
              {`Nature London aims to provide
outdoor learning opportunities to the local community,
 especially children and young people.`}
            </h1>
            <p className=" bottom-56  w-full text-black text-2xl font-thin px-5 py-4">
              {`Self-directed education and to raise environmental and climate awareness by promoting sustainable living and care for local resources.`}
            </p>
          </div> */}
          </div>
          {/* --------------------------------------------------------------------------------// Text + Image section 1 // */}
          <div className="w-full  relative overflow-hidden  ">
            <div className=" w-full   h-full absolute overflow-hidden   grid grid-cols-4 ">
              <img
                className=" h-full w-full col-span-2 object-cover      opacity-0  "
                src={overlay2}
                alt=""
              />
              <img
                className="  h-full w-full col-span-2 object-fit object-right     opacity-30 xl:span-3 xl:w-4/5"
                src={overlay1}
                alt=""
              />
            </div>
            <div className="w-full  py-8  ">
              <div className=" sm:justify-center lg:w-4/5 m-auto px-4 sm:py-10 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex justify-center sm:justify-start sm:px-4 order-2 sm:order1 m-auto w-full  ">
                  <img
                    className="object-cover   overflow-hidden max-h-80   w-11/12  transform transition duration-200"
                    src={landingPic2}
                    alt=""
                  />
                </div>
                <div className="order-1 sm:order-2 flex flex-col justify-center px-4">
                  <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                    Self-directed education
                  </h1>
                  <p className="  mb-4 md:text-1xl   lg:text-2xl">
                    Young people will be empowered by the opportunity to explore
                    their natural curiosity and playfulness, whilst
                    participating in a learning community where each voice is
                    valued, and activities are co-created by participation in
                    democratic processes that involve consent.
                  </p>
                  <button
                    onClick={(e) => history.push("/about")}
                    className="bg-black z-50 text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4 mb-4 sm:mb-0 rounded "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------// Text + Image section 2 // */}
            <div className="w-full sm:py-8  relative">
              <div className="    w-full  h-full absolute overflow-hidden  grid grid-cols-4 ">
                <img
                  className=" w-full col-span-2 object-cover   opacity-30  xl:w-4/5"
                  src={overlay2}
                  alt=""
                />
              </div>
              <div className=" sm:justify-center lg:w-4/5 m-auto px-4 pb-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center px-4">
                  <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                    Playing and Learning
                  </h1>
                  <p className="mb-4 md:text-1xl  lg:text-2xl">
                    Curious by Nature’s play and learning activities will
                    develop the community’s environmental awareness and increase
                    their knowledge of local plant and animal habitats. They
                    will benefit from sustainable living experiences and be
                    aware of tools and resources to reduce the carbon footprint
                    of their daily life.
                  </p>
                  <a
                    href="https://www.eventbrite.co.uk/o/curious-by-nature-london-35622664273"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black z-50 text-white w-32 text-center  font-semibold  py-2 px-4 mt-4 mb-4 rounded "
                  >
                    Join Us
                  </a>
                </div>
                <div className="flex justify-center sm:justify-start sm:px-3    w-full  ">
                  <img
                    className="object-cover  overflow-hidden max-h-80  w-11/12  "
                    src={landingPic1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
