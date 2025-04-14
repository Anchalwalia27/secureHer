import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const items = ["TrackMe", "Recorder", "FakeCall", "Helpline"];

  return (
    <footer className="sticky  w-full bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex flex-wrap justify-center md:justify-evenly gap-6 md:gap-12 lg:gap-20">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className="text-sm md:text-base lg:text-lg font-medium hover:shadow-md hover:text-amber-1 00 transition"
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}
