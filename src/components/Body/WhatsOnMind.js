import React, { useRef } from "react";
import { IMG_URL } from "../Utility/Data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WhatsOnMind = ({ WhatsOnMind, header }) => {
  const ScrollBar = useRef();
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  const scrollLeft = () => {
    ScrollBar.current.scrollLeft += 950;
  };

  const scrollRight = () => {
    ScrollBar.current.scrollLeft -= 950;
  };

  const findCollectionId = (givenURL) => {
    const regex = /[?&]collection_id=([^&]+)/;
    const match = regex.exec(givenURL);
    return match ? match[1] : null;
  };

  return (
    <div className="my-10">
      <h1 className="font-Poppins font-bold text-lg lg:text-2xl ml-3" style={{ color: theme.textColor }}>
        {header.title}
      </h1>
      <div className="flex flex-col mt-4">
        <div className="flex gap-3 self-end">
          <span>
            <FaArrowLeft
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.backgroundColor }}
              onClick={scrollRight}
            />
          </span>
          <span>
            <FaArrowRight
              size={33}
              className="rounded-full p-2 opacity-70 hover:opacity-100 cursor-pointer"
              style={{ backgroundColor: theme.backgroundColor }}
              onClick={scrollLeft}
            />
          </span>
        </div>
        <div
          className="flex flex-nowrap mt-3 overflow-x-auto scroll-smooth no-scrollbar"
          ref={ScrollBar}
        >
          {WhatsOnMind.map((item) => (
            <div
              className="flex-grow-0 flex-shrink-0 basis-auto hover:scale-105 transition-all m-2"
              key={item.id}
              style={{ backgroundColor: theme.backgroundColor,  borderRadius: "10px" }}
            >
              <Link to={"/selectedDish?collectionID=" + findCollectionId(item.action.link)}>
                <img
                  src={IMG_URL + item.imageId}
                  className="h-32 lg:h-40 w-32 lg:w-40 cursor-pointer rounded-lg"
                  alt={item.title}
                  style={{
                    backgroundColor: theme.backgroundColor, // Ensure the image blends well with the theme background
                    filter: `brightness(${theme.backgroundColor === "#1a1a1a" ? "0.8" : "1"})`, // Adjust brightness based on theme
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsOnMind;
