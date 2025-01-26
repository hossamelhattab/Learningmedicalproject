"use client";
import { JSX, SetStateAction, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Carousel({
  direction = "horizontal",
  slides,
}: {
  direction: "horizontal" | "vertical";
  slides: JSX.Element[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex gap-5">
      <div
        className={`relative overflow-hidden w-[450px] h-[500px] bg-white rounded-2xl p-10 ${
          direction === "vertical" ? "h-[400px]" : ""
        }`}
      >
        {/* Slides container */}
        <div
          className={`h-full transition-transform duration-300 ease-in-out ${
            direction === "horizontal" ? "flex" : "block"
          }`}
          style={{
            transform:
              direction === "horizontal"
                ? `translateX(-${currentIndex * 100}%)`
                : `translateY(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                direction === "horizontal" ? "min-w-full" : "h-full"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {direction === "horizontal" && (
          <>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-0 bg-black/50 text-white px-4 py-2 text-2xl hover:bg-black/70 transition-colors"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 text-white px-4 py-2 text-2xl hover:bg-black/70 transition-colors"
              onClick={nextSlide}
            >
              &#10095;
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {direction === "vertical" && (
        <div className="relative flex flex-col items-center justify-center gap-10">
          <button className="text-white text-2xl" onClick={prevSlide}>
            <FaArrowUp />
          </button>

          <div className="flex flex-col gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          <button className="text-white text-2xl" onClick={nextSlide}>
            <FaArrowDown />
          </button>
        </div>
      )}
    </div>
  );
}

export default function CarouselSection() {
  const slides = [
    <div key={1} className="h-full flex flex-col justify-center">
      <h1 className="text-4xl mb-3">Always moving forward as one</h1>
      <p className="text-lg text-slate-500">
        Our high-quality facilities, services and teams keep their eyes and
        heart on the horizon. Together, we anticipate and prepare for the future
        by bringing curiosity and rigorous inquiry to every day. We constantly
        innovate so we can treat, care for, and heal more people with
        humankindness.
      </p>
    </div>,
    <div key={2} className="h-full flex flex-col justify-center">
      <h1 className="text-4xl mb-3">Powered by faith</h1>
      <p className="text-lg text-slate-500">
        We believe that wholeness comes from care that nurtures both your
        physical and spiritual wellbeing. Our faith inspires us to deliver
        compassionate, inclusive care that goes beyond just treating the body by
        uplifting and honoring each unique individual.
      </p>
    </div>,
    <div key={3} className="h-full flex flex-col justify-center">
      <h1 className="text-4xl mb-3">Connected with intention</h1>
      <p className="text-lg text-slate-500">
        At CommonSpirit, our strength comes from our diverse caregivers sharing
        their experiences, equipping each other to succeed, and leading by
        example. This shared growth and accountability ensures that every
        hospital, clinic and caregiver is stronger, together.
      </p>
    </div>,
  ];

  return (
    <div className="">
      {/* <h2 className="text-2xl mb-4 font-bold">Horizontal Carousel</h2> */}
      {/* <Carousel slides={slides} direction="horizontal" /> */}

      {/* <h2 className="text-2xl mt-8 mb-4 font-bold">Vertical Carousel</h2> */}
      <Carousel slides={slides} direction="vertical" />
    </div>
  );
}
