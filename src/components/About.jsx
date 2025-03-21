import React from "react";

function AboutUs() {
  return (
    <div className="p-10 min-h-screen bg-transparent">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">ABOUT US.</h1>
      <p>
        Tailwind CSS works by scanning all of your HTML files, JavaScript
        components,
        <br /> and any other templates for class names
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
        {/* Box 1 */}
				<div className="h-[400px] w-[350px] flex flex-col text-left bg-gray-100/40 backdrop-blur-md">
          <div className="text-left mt-80 h-20 w-60 rounded bg-yellow-400 p-2">
          <h3 className="font-bold mb-1 text-black">Our Mission</h3>
            <p className="text-black">Web Designer</p>
          </div>
        </div>

        {/* Box 2 */}
				<div className="h-[400px] w-[350px] flex flex-col text-left bg-gray-100/40 backdrop-blur-md shadow-lg">
  <div className="text-left mt-80 h-20 w-60 rounded bg-yellow-400 p-2">
    <h3 className="font-bold mb-1 text-black">Our Mission</h3>
    <p className="text-black">Web Designer</p>
  </div>
</div>


        {/* About Section */}
        <div className="h-[400px] flex flex-col items-start justify-center p-6 text-left">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Little About Us</h2>
          <p className="text-gray-600 text-sm mb-3">
            Tailwind CSS works by scanning all of your HTML files, JavaScript
            components, and any other templates for class names.
          </p>
          <button className="text-black  py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
