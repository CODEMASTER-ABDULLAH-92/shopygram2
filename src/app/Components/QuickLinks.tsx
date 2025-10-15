"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import p1 from "../../../public/p1.jpeg";
import p2 from "../../../public/p2.jpeg";

interface Category {
  id: number;
  name: string;
  productImage: string | StaticImageData;
  productCount: number;
  bgColor: string;
}

const Categories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      productImage: p1,
      productCount: 1245,
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      name: "Clothing & Fashion",
      productImage: p2,
      productCount: 892,
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100"
    },
    {
      id: 3,
      name: "Home & Kitchen",
      productImage: p1,
      productCount: 756,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
    },
    {
      id: 4,
      name: "Beauty & Personal Care",
      productImage: p2,
      productCount: 543,
      bgColor: "bg-gradient-to-br from-purple-50 to-fuchsia-100"
    },
    {
      id: 5,
      name: "Sports & Outdoors",
      productImage: p1,
      productCount: 421,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
    },
    {
      id: 6,
      name: "Books & Stationery",
      productImage: p2,
      productCount: 334,
      bgColor: "bg-gradient-to-br from-cyan-50 to-sky-100"
    },
    {
      id: 7,
      name: "Toys & Games",
      productImage: p1,
      productCount: 287,
      bgColor: "bg-gradient-to-br from-red-50 to-pink-100"
    },
    {
      id: 8,
      name: "Jewelry & Watches",
      productImage: p2,
      productCount: 198,
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-100"
    },
    {
      id: 9,
      name: "Automotive",
      productImage: p1,
      productCount: 156,
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-100"
    },
    {
      id: 10,
      name: "Health & Fitness",
      productImage: p2,
      productCount: 234,
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100"
    },
    {
      id: 11,
      name: "Groceries",
      productImage: p1,
      productCount: 567,
      bgColor: "bg-gradient-to-br from-lime-50 to-green-100"
    },
    {
      id: 12,
      name: "Pet Supplies",
      productImage: p2,
      productCount: 189,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    }, 
    ,
    {
      id: 13,
      name: "Groceries",
      productImage: p1,
      productCount: 567,
      bgColor: "bg-gradient-to-br from-lime-50 to-green-100"
    },
    {
      id: 14,
      name: "Pet Supplies",
      productImage: p2,
      productCount: 189,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    },
    ,
    {
      id: 15,
      name: "Groceries",
      productImage: p1,
      productCount: 567,
      bgColor: "bg-gradient-to-br from-lime-50 to-green-100"
    },
    {
      id: 16,
      name: "Pet Supplies",
      productImage: p2,
      productCount: 189,
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100"
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quick Links → Categories</h2>
        <p className="text-gray-600">Browse products by category</p>
      </div>

      {/* Categories Grid */}

      <div className=" hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`group ${category.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50 hover:border-white/80 overflow-hidden`}
          >
            {/* Image Container with Background Color */}
            <div className="relative h-48 overflow-hidden flex items-center justify-center p-6">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/30 to-black/10"></div>
              
              {/* Centered Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                <Image
                  src={category.productImage}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-full" />
              </div>

              {/* Product Count Badge */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <span className="text-xs font-bold text-gray-700">
                  {category.productCount}+
                </span>
              </div>
            </div>

            {/* Category Info */}
            <div className="p-5 text-center bg-white/80 backdrop-blur-sm border-t border-white/50">
              <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200 text-lg">
                {category.name}
              </h3>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>


<div className=" sm:hidden w-full pb-4 overflow-scroll">
  <div className="grid grid-rows-3 grid-flow-col gap-4 px-4">
    {categories.map((category) => (
      <div
        key={category.id}
        className="group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <Image
            src={category.productImage}
            alt={category.name}
            fill
            className="object-cover"
            sizes="80px"
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-full" />
        </div>
      </div>
    ))}
  </div>
</div>


      {/* View All Button */}
      {/* <div className="flex justify-center mt-12">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          View All Categories
        </button>
      </div> */}
    </div>
  );
};

export default Categories;