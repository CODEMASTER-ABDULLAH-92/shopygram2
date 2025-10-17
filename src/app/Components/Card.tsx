"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface cardInfo {
  _id: string;
  imag1: string[]; // Now it's an array
  heading: string;
  price: number;
}

const Card = (info: cardInfo) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle image errors
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link
      href={`shop/${info._id}`}
      className="cursor-pointer flex justify-center items-center"
    >
      <div className="flex flex-col items-start m-2 overflow-hidden w-full">
        {/* Image Container - FIXED: Added relative positioning and fixed dimensions */}
        <div
          className="relative mb-2 w-full h-80 bg-gray-100 rounded-md overflow-hidden"
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
        >
          {/* Front Image */}
          {!imageError && info.imag1[0] ? (
            <Image
              alt="product-front"
              src={info.imag1[0]}
              fill
              className={`object-cover transition-opacity duration-500 ${
                hovered && info.imag1[1] ? "opacity-0" : "opacity-100"
              }`}
              onError={handleImageError}
            />
          ) : (
            // Fallback if image fails to load
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* Back Image (only render if provided) */}
          {!imageError && info.imag1[1] && (
            <Image
              alt="product-back"
              src={info.imag1[1]}
              fill
              className={`object-cover transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              onError={handleImageError}
            />
          )}
        </div>

        {/* Product Info */}
        <h1 className="text-lg font-medium">{info.heading}</h1>
        <h1 className="text-gray-700">${info.price}</h1>
      </div>
    </Link>
  );
};

export default Card;