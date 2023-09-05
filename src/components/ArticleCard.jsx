import React from "react";
import { BsCheckLg } from "react-icons/bs";

import { images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`
        ${className}
        rounded-xl
        overflow-hidden
        shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]
      `}
    >
      <img
        className="
          w-full
          object-cover
          object-center
          h-auto
          mg:h-52
          lg:h-48
          xl:h-60
        "
        src={images.Post1Image}
        alt="post1"
      />
      <div className="p-5">
        <h2
          className="
            font-roboto
            font-bold
            text-xl
            text-dark-soft
            md:text-2xl
            lg:text-[28px]
          "
        >
          Future of Work
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          Majority of people will work in jobs that don't exist today.
        </p>
        <div
          className="
            flex
            flex-nowrap
            justify-between
            items-center
            mt-6
          "
        >
          <div className="flex items-center gap-x-2 md:gap-2.5">
            <img
              className="w-9 h-9 md:w-10 h-10"
              src={images.PostProfileImage}
              alt="postprofile"
            />
            <div className="flex flex-col">
              <h4
                className="
                  font-bold
                  italic
                  text-dark-soft
                  text-sm
                  md:text-base
                "
              >
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
