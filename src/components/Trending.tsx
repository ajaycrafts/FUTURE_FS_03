"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function Trending() {
  const products = [
    {
      title: "Nike Air Zoom",
      price: "₹12,999",
      image: "/hero1.jpg",
    },
    {
      title: "Nike Pegasus 40",
      price: "₹10,495",
      image: "/hero2.jpg",
    },
    {
      title: "Nike Infinity Run",
      price: "₹14,999",
      image: "/hero3.jpg",
    },
    {
      title: "Nike Vaporfly",
      price: "₹19,999",
      image: "/hero4.jpg",
    },
    {
      title: "Nike React Vision",
      price: "₹11,999",
      image: "/hero5.jpg",
    },
  ];

  // Function to convert title → slug
  const slugify = (title: string) =>
    title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Trending Now</h2>

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
        {products.map((p, index) => (
          <SwiperSlide key={index}>
            <Link href={`/product/${slugify(p.title)}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition group">

                {/* Product Image */}
                <img
                  src={p.image}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-600 mt-1">{p.price}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
