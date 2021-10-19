import React from "react";
import hero from "../images/annie-spratt-GIK1tsETnXI-unsplash.jpg";
import landingPic1 from "../images/anna-samoylova-w55SpMmoPgE-unsplash.jpg";
import Footer from "../layout/Footer";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div className="   z-30  w-screen h-screen  ">
      {/* ----------------------------------------------------------------------------------- // hero // */}

      <div className=" relative  w-full   h-3/4 ">
        <img
          className="object-cover object-right  overflow-hidden   w-screen h-full"
          src={hero}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-56  w-full  lg:w-4/5 py-4 px-4  ">
          <p className=" whitespace-pre-wrap  bottom-56  w-full text-white text-4xl ">
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
        <div className=" bg-background-light  ">
          <div className=" lg:w-4/5 m-auto  w-full grid grid-cols-2 bg-yellow px-4 py-10">
            <h1 className="   bottom-56  w-full text-black text-3xl font-semibold  py-4 lg:text-4xl">
              {`Nature London aims to provide
outdoor learning opportunities to the local community,
 especially children and young people.`}
            </h1>
            <p className=" bottom-56  w-full text-black text-2xl font-thin px-5 py-4">
              {`Self-directed education and to raise environmental and climate awareness by promoting sustainable living and care for local resources.`}
            </p>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------// Text + Image section 1 // */}
        <div className="w-full bg-white my-8">
          <div className=" sm:justify-center lg:w-4/5 m-auto px-4 py-10 grid grid-cols-2">
            <div className="flex    ">
              <img
                className="object-cover   overflow-hidden   w-11/12  "
                src={landingPic1}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center px-4">
              <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                Self-directed education
              </h1>
              <p className="mb-4 md:text-1xl  lg:text-2xl">
                Young people will be empowered by the opportunity to explore
                their natural curiosity and playfulness, whilst participating in
                a learning community where each voice is valued, and activities
                are co-created by participation in democratic processes that
                involve consent.
              </p>
              <button
                onClick={(e) => history.push("/about")}
                className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------// Text + Image section 2 // */}
        <div className="w-full bg-white my-8">
          <div className=" sm:justify-center lg:w-4/5 m-auto  py-10 grid grid-cols-2">
            <div className="flex flex-col justify-center px-4">
              <h1 className="  bottom-56  w-full text-black text-3xl font-semibold mb-4  lg:text-4xl">
                Playing and Learning
              </h1>
              <p className="mb-4 md:text-1xl  lg:text-2xl">
                Curious by Nature’s play and learning activities will develop
                the community’s environmental awareness and increase their
                knowledge of local plant and animal habitats. They will benefit
                from sustainable living experiences and be aware of tools and
                resources to reduce the carbon footprint of their daily life.
              </p>
              <button
                onClick={(e) => history.push("/join-us")}
                className="bg-black text-white w-32 hover:bg-opacity:20 text-grey-700 font-semibold  py-2 px-4 mt-4  rounded "
              >
                Learn More
              </button>
            </div>
            <div className="flex  px-4  ">
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
  );
};

export default Landing;
