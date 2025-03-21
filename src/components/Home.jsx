import React from 'react';

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      
      {/* Left Side Content */}
      <div className="w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-3xl font-bold text-gray-800 leading-tight">
          Hello!!! <br /> We Are Creative <br /> Digital Agency.
        </h2>
        <p className="text-base text-gray-600 mt-2">
          This is a randomly generated text to fill up the space. Hope you like the design!
        </p>
        <button className="mt-5 w-[150px] h-[35px] bg-yellow-400 text-black font-semibold flex items-center justify-center rounded">
          SEND MESSAGE
        </button>
      </div>

      {/* Right Side Card */}
      <div className="w-1/2 h-[400px]  bg-gray-100/40 backdrop-blur-md">
      </div>

    </div>
  );
}

export default Home;
