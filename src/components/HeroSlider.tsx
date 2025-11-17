"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
    {
      image: "/hero1.jpg",
      title: "Push Your Limits",
      subtitle: "Discover the next generation of performance footwear.",
    },
    {
      image: "/hero2.jpg",
      title: "Run Your Future",
      subtitle: "Engineered for speed, built for comfort.",
    },
    {
      image: "/hero3.jpg",
      title: "Dominate Every Step",
      subtitle: "Maximum stability for every athlete.",
    },
  ];

  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 2500 }}
        loop={true}
        speed={900}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Fullscreen Image */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                priority
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Centered Text */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                  {s.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl opacity-90">
                  {s.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
