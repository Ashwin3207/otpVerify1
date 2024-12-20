import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold">
              Company<span className="text-[#F83002]">Logo</span>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signin">Services</Link>
              </li>
              <li>
                <Link to="/signup">Explore</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
