import React from "react";

function Ourblog() {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-black mb-10">OUR BLOG</h1>
      <p className="text-black">
        Installing Tailwind CSS as a Vite plugin is the most seamless way to{" "}
        <br />
        integrate it with frameworks like Laravel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col items-start">
          <div className="bg-gray-100/40 backdrop-blur-md bg-yellow-300 h-[300px] w-[350px] flex items-center justify-center text-left p-4">
            <h2 className="text-gray-800 font-bold ml-4">READ MORE</h2>
          </div>
          <h3 className="text-xl font-semibold mt-3">SUPER BLOG ARTICLE!</h3>
          <p className="text-black mt-3">
            Discover amazing insights and updates.
          </p>
          <h5 className="text-black mt-3">20 May 2020</h5>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-gray-100/40 backdrop-blur-md hover:bg-yellow-300 h-[300px] w-[350px] flex items-center justify-center text-left p-4">
           
          </div>
          <h3 className="text-xl font-semibold mt-3">SUPER BLOG ARTICLE!</h3>
          <p className="text-black mt-3">
            Discover amazing insights and updates.
          </p>
          <h5 className="text-black mt-3">20 May 2020</h5>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-gray-100/40 backdrop-blur-md hover:bg-yellow-300 h-[300px] w-[350px] flex items-center justify-center text-left p-4">
            
          </div>
          <h3 className="text-xl font-semibold mt-3">SUPER BLOG ARTICLE!</h3>
          <p className="text-black mt-3">
            Discover amazing insights and updates.
          </p>
          <h5 className="text-black mt-3">20 May 2020</h5>
        </div>
      </div>
    </div>
  );
}

export default Ourblog;
