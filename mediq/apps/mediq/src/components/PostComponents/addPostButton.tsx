import React from "react";
import { Link } from "react-router-dom";
const FloatingActionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 z-20 right-8 bg-[#095D7E] hover:bg-[#137298] text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
    ><Link to="/create_post">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
      </Link>
    </button>
  );
};

export default FloatingActionButton;
