import React, { useState } from "react";
import "./Hero.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Hero = ({ data }) => {
  const [slide, Setslide] = useState(0);

  const nextSlide = () => {
    Setslide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    Setslide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carasoul">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => Setslide(idx)}
              ></button>
            );
          })}
        </span>
        <div className="description">
          <h1>Welcome To Easy Crets</h1>
          <p>A one Stop destination for all your housing requirements</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
