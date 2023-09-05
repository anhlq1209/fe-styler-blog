import React from "react";

import { images } from "../../constants";
import NavItem from "./NavItem";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
];

const Header = () => {
  return (
    <section>
      <header
        className="
          container
          mx-auto
          px-5
          py-4
          flex
          justify-between
          items-center
        "
      >
        <div>
          <img src={images.Logo} alt="logo" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button
            className="
              border-2
              border-blue-500
              px-6
              py-2
              rounded-full
              text-blue-500
              font-semibold
              hover:bg-blue-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
