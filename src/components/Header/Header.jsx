import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { images } from "../../constants";
import NavItem from "./NavItem";

const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
];

const Header = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const userState = useSelector((state) => state.user);
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section
      className="
        sticky
        top-0
        left-0
        right-0
        z-50
        bg-white
      "
    >
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
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`
            ${navIsVisible ? "right-0" : "-right-full"}
            transition-all
            duration-300
            mt-[56px]
            lg:mt-0
            bg-dark-hard
            lg:bg-transparent
            z-[49]
            flex
            flex-col
            w-full
            lg:w-auto
            justify-center
            lg:justify-end
            lg:flex-row
            fixed
            top-0
            bottom-0
            lg:static
            gap-x-9
            items-center
          `}
        >
          <ul
            className="
              text-white
              items-center
              gap-y-5
              lg:text-dark-soft
              flex
              flex-col
              lg:flex-row
              gap-x-2
              font-semibold
            "
          >
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button
            className="
              mt-5
              lg:mt-0
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
