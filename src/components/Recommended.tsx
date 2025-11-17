"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Recommended() {
  const items = [
    {
      title: "Air Jordan CMFT Era",
      price: "₹10,795",
      image: "/hero1.jpg",
    },
    {
      title: "Air Jordan 4 RM",
      price: "₹12,157",
      image: "/hero2.jpg",
    },
    {
      title: "Air Jordan 1 Low",
      price: "₹11,495",
      image: "/hero3.jpg",
    },
    {
      title: "Nike React Vision",
      price: "₹11,999",
      image: "/hero4.jpg",
    },
    {
      title: "Nike Pegasus 40",
      price: "₹10,495",
      image: "/hero5.jpg",
    },
  ];

  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4.2 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer bg-white">
              <img src={item.image} className="w-full h-60 object-cover" />

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
