import React from "react";

const Header = () => {
  const username = localStorage.getItem("user");

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">
        {username ? `Welcome, ${username}` : "Hacker News"}
      </h1>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
