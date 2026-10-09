import React, { useState, useRef, useId, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Slide = ({ slide, index, current, handleSlideClick, totalSlides }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (slideRef.current) {
        slideRef.current.style.setProperty("--x", `${xRef.current}px`);
        slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  if (!slide) return null;
  const { src, button, title, price } = slide;
  const isActive = current === index;

  return (
    <div className="flex-none shrink-0 w-full flex items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] h-[440px] sm:h-[480px] md:h-[520px] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isActive ? "scale(1) rotateX(0deg)" : "scale(0.92) rotateX(6deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#121212] border border-[#3D352E] hover:border-[#C4924A]/60 rounded-3xl overflow-hidden transition-all duration-300 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          style={{
            transform: isActive ? "translate3d(calc(var(--x, 0px) / 30), calc(var(--y, 0px) / 30), 0)" : "none",
          }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0.45,
              transform: isActive ? "scale(1.05)" : "scale(1)",
            }}
            alt={title || "Platillo PÚA"}
            src={src}
            loading="eager"
          />
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-700" />
          )}

          {/* Slide index counter badge */}
          <div className="absolute top-4 right-4 bg-black/80 border border-[#3D352E] backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-sans tracking-widest text-[#C4924A]">
            {index + 1} / {totalSlides}
          </div>
        </div>

        <article
          className={`relative p-6 sm:p-8 transition-all duration-700 ease-in-out flex flex-col items-center justify-end h-full w-full z-20 ${
            isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
          }`}
        >
          {price && (
            <span className="text-xs uppercase font-serif-corp tracking-[0.2em] text-[#C4924A] bg-black/90 px-4 py-1.5 border border-[#C4924A]/40 rounded-full mb-3 shadow-lg backdrop-blur-md">
              ${price.toLocaleString()} MXN
            </span>
          )}
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-corp font-bold text-[#F4F0EA] tracking-wider relative drop-shadow-lg leading-tight mb-3">
            {title}
          </h2>

          <div className="flex justify-center mt-2">
            <button className="btn-luxury-gold text-xs py-3 px-7 rounded-full shadow-xl font-bold tracking-widest uppercase">
              {button || "Reservar Platillo"}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center bg-[#121212] border border-[#3D352E] text-[#C4924A] rounded-full focus:border-[#C4924A] focus:outline-none hover:bg-[#C4924A] hover:text-black hover:scale-110 active:scale-95 transition duration-300 shadow-xl ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default function Carousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  if (!slides || !Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div
      className="relative w-full max-w-[440px] min-h-[520px] sm:min-h-[580px] mx-auto overflow-hidden flex flex-col items-center justify-center py-4"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="w-full flex transition-transform duration-700 ease-out py-4"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            totalSlides={slides.length}
          />
        ))}
      </ul>

      <div className="flex justify-center items-center gap-4 mt-6 z-30">
        <CarouselControl
          type="previous"
          title="Ver platillo anterior"
          handleClick={handlePreviousClick}
        />

        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? "w-8 bg-[#C4924A]" : "w-2 bg-[#3D352E] hover:bg-[#C4924A]/50"
              }`}
              aria-label={`Ver diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Ver platillo siguiente"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
