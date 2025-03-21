import React from "react";

function Logo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 p-6 w-full">
      {/* Logo 1 */}
      <img src="/Logo2.png" alt="Logo 1" className="h-20 w-full object-contain" />

      {/* Logo 2 */}
      <img src="/Logo7.png" alt="Logo 2" className="h-20 w-full object-contain" />

      {/* Logo 3 */}
      <img src="/Logo3.png" alt="Logo 3" className="h-20 w-full object-contain" />

      {/* Logo 4 */}
      <img src="/logo4.png" alt="Logo 4" className="h-20 w-full object-contain" />

      {/* Logo 5 */}
      <img src="/logo5.png" alt="Logo 5" className="h-20 w-full object-contain" />

      {/* Logo 6 */}
      <img src="/logo6.png" alt="Logo 6" className="h-20 w-full object-contain" />
    </div>
  );
}

export default Logo;
