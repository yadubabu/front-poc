import React from "react";
import { slides } from "../data/slides";
import "./slider.css";

const Slider = () => {
  return (
    <div className="flex align-center  justify-center m-1">
      <div className="slide-images ">
        {slides.map((slide, index) => {
          return (
            <div className="img-container bg-white w-1/6 m-5 p-2 ">
              <img
                className="rounded-xl"
                key={index}
                src={slide.url}
                alt=""
              />
              <div className="font-bold text-xl">
                {slide.caption}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
