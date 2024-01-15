"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import imagesByIndex from "../content/imagesByIndex";
import { useState } from "react";
import Link from "next/link";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const { imageByIndex, imgTextByIndex } = imagesByIndex;

const HomeHero = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 }),
  ]);
  const [showText, setShowText] = useState(false);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <div className="absolute top-1/3 md:top-16 left-1/3 md:left-40 text-center">
                <div className="p-5 bg-black bg-opacity-85 rounded-xl">
                  <h1 className="text-2xl md:text-4xl bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                    {imgTextByIndex(index).title}
                  </h1>
                  <h2 className="text-base md:text-lg font-ubuntu">
                    {imgTextByIndex(index).titleSubText}
                  </h2>
                </div>
                <div
                  className={`justify-center transition-all duration-300 ease-in-out ${
                    showText ? "flex" : "hidden"
                  }`}
                >
                  <Link
                    href="/what-we-do"
                    aria-label={`Learn More about ${
                      imgTextByIndex(index).title
                    }`}
                    className="mt-5 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
                  >
                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Learn {imgTextByIndex(index).title} &nbsp; &rarr;
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`absolute bottom-1/4 right-24 w-2/3 ${
                  showText ? "flex" : "hidden"
                }`}
              >
                <div className="p-5 bg-black bg-opacity-85 rounded-xl">
                  <p className="text-2xl font-raleway text-[var(--neon-yellow)]">
                    {imgTextByIndex(index).text}
                  </p>
                </div>
              </div>
              <Image
                className="embla__slide__img"
                src={imageByIndex(index)}
                height={750}
                width={1500}
                alt={imgTextByIndex(index).altText}
                priority
                quality={10}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
