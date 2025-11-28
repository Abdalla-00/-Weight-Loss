import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-500">
      <nav className="flex justify-between items-center max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold">
          <h1>Logo</h1>
        </div>
        <ul className="flex gap-4 cursor-pointer text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contct</li>
          <li>Rigistar</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
