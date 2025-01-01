import React, { useState } from "react";
import data from "./data";
import "./ImageSlider.css";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="image-slider">
      <div className="slider-text">
        <span>Trending now</span>
        <h1>Mike's famous salad with cheese</h1>
        <p>By John Mike</p>
      </div>
      <div className="slider">
        {data.map((recipeImage, index) => {
          return (
            <div
              key={index}
              className={
                currentIndex === index
                  ? "slider-image image-show"
                  : "slider-image image-hide"
              }
              style={{
                backgroundImage: `url(${recipeImage.image})`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="slider-controle">
        <div className="arrows">
          <IoArrowBackCircleOutline onClick={handlePrev} />
          <IoArrowForwardCircleOutline onClick={handleNext} />
        </div>
        <div className="buttons">
          {data.map((_, index) => {
            return (
              <button
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={
                  currentIndex === index ? "btn btn-show" : "btn btn-hide"
                }
                key={index}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
