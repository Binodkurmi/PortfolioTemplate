import React from 'react';
import { FaEnvelope, FaFacebook, FaTwitter, FaGlobe, FaArrowUp, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";


function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-black ">ABOUT US.</h1>
      <p className="mt-3">
        Tailwind CSS works by JavaScript components, and any other <br />
        templates for class names, generating styles and writing them to a static CSS file
      </p>

   
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 "
              ></textarea>
              <button className="w-40 bg-yellow-300 text-black font-semibold py-3">
                Send Message
              </button>
            </form>
          </div>

        
					<div className="bg-gray-100/40 backdrop-blur-md h-[400px] w-full"></div>

        </div>
      </div>

    
   
      <div className="mt-16 text-black text-center">
        <div className="grid grid-cols-1 md:grid-cols-3  text-lg">
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-2" />
            <span className="text-center">
              Awesome Avenue<br />
              NY, USA
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-yellow-500 text-3xl mb-2" />
            <span className="text-center">
              +977 98625442<br />
              +91-90987654322
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-yellow-500 text-3xl mb-2" />
            <span className="text-center">minti@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-3 gap-10  mt-8 text-xl">
        <FaFacebook className="text-black " />
        <FaTwitter className="text-black " />
        <FaGlobe className="text-black " />
      </div>

      
			<div className="bg-black h-30 text-white mt-10 p-4 flex justify-between items-center">
			<img src="/Logo1.png" alt="Logo" className="h-10 w-auto bg-black" />

  <p className="p-2 flex-grow">&copy; 2025 - Minit. All rights reserved.</p>

	<button
    className=" text-white px-4 py-2 flex items-center gap-2 rounded-full"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >Back to Top
    <FaArrowUp className="text-xl" /> 
  </button>

      </div>
    </div>
  );
}

export default Contact;
