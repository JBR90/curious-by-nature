import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import overlay3 from "../images/CBN_illustrations/PNG/porcupine.png";
import { BiNews } from "react-icons/bi";
import Footer from "../layout/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w8icvr1",
        "template_c67srin",
        form.current,
        "user_gNEvxjDjrro25LjCUAGkS"
      )
      .then(
        (result) => {
          setMessage("Your message has been sent");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          // console.log(result.text);
        },
        (error) => {
          setErrorMessage("Error : Your message has not been sent");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
          // console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="w-screen relative md:top-20 h-screen  ">
      {/* <div className="absolute  w-full bottom-28 left-20  ">
        <img className="w-80 " src={overlay3} alt="" />
      </div> */}
      <div className="w-full  md:h-full m-auto lg:w-4/5 grid grid-col-1 md:grid-cols-2 gap-8 px-2 py-2 items-center ">
        <div className="px-4   mt-32 md:mb-10 md:mt-0 xl:w-3/4 xl:ml-20">
          <h1 className="text-5xl mb-5">Contact Us</h1>
          <p className="text-xl mb-5 ">
            Get in touch to find out about who we are and what we do.
          </p>
          <p className="text-xl mb-5 ">
            <a
              className="font-semibold cursor-pointer"
              target="_blank"
              rel="noreferrer"
              alt="Join mailing list"
              href="http://eepurl.com/hLhOBX"
            >
              Sign up
            </a>{" "}
            to our newsletter.
          </p>
          {/* <p className="">curiousbynaturelondon@gmail.com</p> */}
          {/* <p className="mb-4">(555) 555-5555</p>
          <p className="">Address</p>
          <p className="mb-4">address 2</p> */}
          <div className="flex py-2 ">
            {/* <FaFacebookF className="mr-3 text-xl cursor-pointer" /> */}
            <FaInstagram className="mr-3 text-2xl cursor-pointer" />
            <BiNews className="mr-3 text-2xl cursor-pointer" />
          </div>
          <img className="w-80 " src={overlay3} alt="" />
        </div>

        <div className="  mb-16 md:mb-3 px-4 items-center xl:mr-20 ">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col ">
            <div className="py-4">
              <label className="block  text-sm  mb-2" for="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                type="text"
                name="user_name"
                // placeholder="Name"
              ></input>
            </div>
            <div>
              <label className="block  text-sm  mb-2" for="username">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="email"
                name="user_email"
                // placeholder="Name"
              ></input>
            </div>
            <div className="py-4">
              <label className="block  text-sm  mb-2" for="name">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Name"
                type="text"
                name="user_message"
                // placeholder="Name"
              ></textarea>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
          <p className="text-center text-green-400">{message}</p>
          <p className="text-center text-red-400 ">{errorMessage}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
