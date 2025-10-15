"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../Components/Card";
import BestSellerNav from "../Components/BestSellerNav";
import { dataApi } from "../../../public/assets";
import { ProductItem } from "../types/product";

const BestSeller = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [bestSeller, setBestSeller] = useState<ProductItem[]>([]);

  // ✅ Filter data once
  useEffect(() => {
    const filteredData = dataApi.filter((item) => item.bestSeller === true);
    setBestSeller(filteredData);
  }, []);

  // ✅ Observe visibility of the BestSeller section
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(entry.isIntersecting);
      },
      {
        threshold: 0.2, // smoother trigger: only when 20% visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ✅ Smooth sticky nav with animation */}
      <div
        className={`fixed top-32 left-0 w-full z-30 transition-all duration-500 ease-in-out ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <BestSellerNav />
      </div>

      {/* ✅ BestSeller Section */}
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {bestSeller.map((item, index) => (
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

export default BestSeller;
