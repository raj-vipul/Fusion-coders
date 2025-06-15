import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-md">MindCare AI</h1>
      <div>
        <Link className="px-3" to="/">
          Home
        </Link>
        <Link className="px-3" to="/chat">
          Chat
        </Link>
        <Link className="px-3" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
