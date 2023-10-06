import React from "react";
import { slides } from "../data/slides";
import "./slider.css";

const Slider = () => {
  return (
    <div className="overflow-hidden flex mt-6  ">
      <div className="slide-images ">
        {slides.map((slide, index) => {
          return (
            <div className="img-container mx-30">
              <img
                className="rounded-xl w-100 h-1/3 text-center"
                key={index}
                src={slide.url}
                alt=""
              />
              <div className="absolute font-bold w-3/3 text-center text-lg bg-white rounded-xl p-2 ">
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
