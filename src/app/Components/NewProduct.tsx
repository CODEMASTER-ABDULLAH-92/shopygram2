"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../Components/Card";
import { dataApi } from "../../../public/assets";
import NewProductNav from "./NewProductNav";
import { StaticImageData } from "next/image";

interface ProductItem {
  _id: string;
  imag1: StaticImageData[];
  heading: string;
  price: string;
  category: string;
  colors: string[];
  sizes: string[];
  discription: string;
  materialCare: string;
  bestSeller: boolean;
  newItem: boolean;
}

const NewProduct = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [newProducts, setNewProducts] = useState<ProductItem[]>([]);

  // ✅ Filter only "newItem" products
  useEffect(() => {
    const filteredData = dataApi.filter((item) => item.newItem === true);
    setNewProducts(filteredData);
  }, []);

  // ✅ Observe visibility of NewProduct section
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.isIntersecting);
      },
      { threshold: 0.2 } // smoother trigger
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ Animated sticky navigation */}
      <div
        className={`fixed top-32 left-0 w-full z-30 transition-all duration-500 ease-in-out ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <NewProductNav />
      </div>

      {/* ✅ Product Grid Section */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {newProducts.map((item, index) => (
          <Card
            key={index}
            _id={item._id}
            heading={item.heading}
            imag1={
              Array.isArray(item.imag1)
                ? item.imag1
                : item.imag1
                ? [item.imag1]
                : []
            }
            price={item.price}
          />
        ))}
      </section>
    </>
  );
};

export default NewProduct;
