"use client";

import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";
import Recommended from "@/components/Recommended";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const slug = params?.slug as string;

  const formattedTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Product data
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const sizes = [
    "UK 4.5", "UK 5", "UK 5.5", "UK 6",
    "UK 6.5", "UK 7", "UK 7.5", "UK 8",
    "UK 8.5", "UK 9", "UK 9.5", "UK 10",
  ];

  const product = {
    title: formattedTitle,
    price: "₹12,999",
    description:
      "Experience unmatched comfort and performance with Nike-engineered cushioning, breathable mesh upper, and high-energy responsiveness.",
  };

  const [selectedSize, setSelectedSize] = useState("");

  const handleAdd = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }

    addToCart({
      title: product.title + ` (Size: ${selectedSize})`,
      price: product.price,
      image: mainImage,
    });
  };

  return (
    <main className="bg-white text-black min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="text-black mb-6 underline opacity-70 hover:opacity-100 transition"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — IMAGES */}
          <div className="flex gap-6">

            {/* THUMBNAILS */}
            <div className="flex flex-col gap-4 w-24">
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setMainImage(img)}
                  className="focus:outline-none"
                  aria-label={`Show ${product.title} image`}
                >
                  <div
                    className={`w-24 h-24 relative rounded-lg overflow-hidden cursor-pointer border ${
                      mainImage === img ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <Image src={img} alt={`${product.title} thumbnail`} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="flex-1">
              <div className="w-full h-[550px] relative rounded-2xl overflow-hidden shadow-lg">
                <Image src={mainImage} alt={product.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>

          {/* RIGHT — PRODUCT DETAILS */}
            <div>
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <p className="text-gray-700 mt-2">Men’s Shoes</p>

            <p className="text-2xl font-semibold mt-4">{product.price}</p>
            <p className="text-gray-500 text-sm mt-1">
              Inclusive of all taxes
            </p>

            {/* SIZE SELECTOR */}
            <h2 className="text-lg font-semibold mt-10 mb-3">Select Size</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-xl py-3 text-center ${
                    selectedSize === size ? "border-black font-semibold" : "border-gray-300"
                  } hover:border-black transition`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* ADD TO CART */}
            <button
              onClick={handleAdd}
              className="mt-8 w-full bg-black text-white py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
            >
              Add to Bag
            </button>

            {/* FAVORITE */}
            <button
              className="mt-3 w-full border border-gray-400 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              Favourite ♡
            </button>

            {/* DESCRIPTION */}
            <p className="mt-10 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <ul className="mt-6 text-gray-700 space-y-2">
              <li>• Colour Shown: Metallic Silver / Black / Neon</li>
              <li>• Style Code: XYZ123-001</li>
              <li>• Country/Region of Origin: Vietnam</li>
            </ul>
            
            <div className="mt-12">
              <Recommended />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
