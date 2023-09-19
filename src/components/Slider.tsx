import React from "react";
import { slides } from "../data/slides";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider-frame">
      <div className="slide-images">
        {slides.map((slide, index) => {
          return (
            <div className="img-container">
              <img key={index} className="img" src={slide.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
