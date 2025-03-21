import React from "react";

function Navbar() {
  return (
    <nav className="text-black pl-10 pr-6 mt-3 w-full">
      <div className="max-w-7xl  flex justify-between items-center">
				
			<img src="/Logo.png" alt="Logo" className="h-10 w-auto"/>

        <div className="space-x-6">
          <a href="#" className="hover:text-gray-500">WORK</a>
          <a href="#" className="hover:text-gray-500">ABOUT</a>
          <a href="#" className="hover:text-gray-500">BLOG</a>
          <a href="#" className="hover:text-gray-500">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
