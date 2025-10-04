// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Card from "../Components/Card";

// import { dataApi } from "../../../public/assets";
// import NewProductNav from "./NewProductNav";

// const NewProduct = () => {
//   const sectionRef = useRef(null);
//   const [showNav, setShowNav] = useState(false);
//   const [bestSeller,setBestSeller] = useState([]);
//   useEffect(()=>{
//     const filteredData = dataApi.filter((item)=> item.bestSeller === true);
//     setBestSeller(filteredData);
//   },[]);
//   // useEffect(() => {
//   //   const observer = new IntersectionObserver(
//   //     ([entry]) => {
//   //       // entry.isIntersecting === true means BestSeller is visible
//   //       setShowNav(entry.isIntersecting);
//   //     },
//   //     { threshold: 0 } // fires when any part of BestSeller is visible
//   //   );

//   //   if (sectionRef.current) observer.observe(sectionRef.current);

//   //   return () => {
//   //     if (sectionRef.current) observer.unobserve(sectionRef.current);
//   //   };
//   // }, []);
// useEffect(() => {
//   const element = sectionRef.current; // copy ref to a variable

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       setShowNav(entry.isIntersecting);
//     },
//     { threshold: 0 }
//   );

//   if (element) observer.observe(element);

//   return () => {
//     if (element) observer.unobserve(element);
//   };
// }, []);

//   return (
//     <>
//       {/* Conditionally render LowerNav only when BestSeller is visible */}
//       {showNav && (
//         <div className="sticky top-30 mt-28 z-30">
//             <NewProductNav/>
//         </div>
//       )}

//       {/* The BestSeller section */}
//       <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {bestSeller.map((item, index) => (
//           <Card
//             key={index}
//             _id={item._id}
//             heading={item.heading}
//             imag1={item.imag1}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default NewProduct;





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
  const [bestSeller, setBestSeller] = useState<ProductItem[]>([]);

  useEffect(() => {
    const filteredData = dataApi.filter((item) => item.bestSeller === true);
    setBestSeller(filteredData);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setShowNav(entry.isIntersecting);
    });

    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <>
      {showNav && (
        <div className="sticky top-30 mt-28 z-30">
          <NewProductNav />
        </div>
      )}

      <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {bestSeller.map((item, index) => (
          <Card key={index} _id={item._id} heading={item.heading} imag1={item.imag1} price={item.price} />
        ))}
      </div>
    </>
  );
};

export default NewProduct;
