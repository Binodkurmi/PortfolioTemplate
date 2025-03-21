import React from "react";
import "remixicon/fonts/remixicon.css";


function WorkShow() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        WORK SHOWCASE
      </h1>
      <div className="flex flex-wrap justify-center md:justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-6">
          <button className="px-4 py-2 text-black bg-yellow-300 font-semibold rounded-md">
            ALL
          </button>
          <button className="px-4 py-2 text-black hover:bg-yellow-300 font-semibold rounded-md">
            BRANDING
          </button>
          <button className="px-4 py-2 text-black hover:bg-yellow-300 font-semibold rounded-md">
            ILLUSTRATION
          </button>
          <button className="px-4 py-2 text-black hover:bg-yellow-300 font-semibold rounded-md">
            WEB
          </button>
        </div>
				<button className="px-4 py-2 text-black hover:bg-yellow-300 font-semibold rounded-md flex items-center gap-2">
  NEWEST FIRST
  <i className="ri-arrow-down-s-line"></i>
</button>

      </div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-4">
  
  <div className="flex flex-col gap-4">
    <div className="bg-yellow-100/40 bg-yellow-300 text-black min-h-[300px] md:min-h-[400px] w-full flex flex-col items-center justify-center text-center rounded-lg  backdrop-blur-md">
      <h3 className="font-serif font-bold text-2xl">ARTWORKS</h3>
      <p className="text-sm font-medium">BRANDING</p>
    </div>
    <div className="bg-gray-100/40 hover:bg-yellow-300 text-black min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center rounded-lg backdrop-blur-md"></div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="bg-gray-100/40 hover:bg-yellow-300 text-black min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center rounded-lg  backdrop-blur-md "></div>
    <div className="bg-gray-100/40 hover:bg-yellow-300 text-black min-h-[300px] md:min-h-[400px] w-full flex items-center justify-center rounded-lg backdrop-blur-md "></div>
  </div>

  <div className="flex flex-col gap-4">
    <div className="bg-gray-100/40 hover:bg-yellow-300 text-black min-h-[300px] md:min-h-[400px] w-full flex items-center justify-center rounded-lg backdrop-blur-md "></div>
    <div className="bg-gray-100/40 hover:bg-yellow-300 text-black min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center rounded-lg  backdrop-blur-md "></div>
  </div>
</div>

<div className="flex justify-center mt-4">
  <button className="bg-yellow-300 w-32 h-10 rounded-md font-semibold shadow-md">
    SHOW MORE
  </button>
</div>

    </div>
  );
}

export default WorkShow;
