// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const UpperNav = () => {
//   const containerRef:any = useRef(null);
//   const sliderRef:any = useRef(null);

//   const data = [
//     "FREE SHIPPING ON ALL ORDERS",
//     "FREE RETURNS WITHIN 30 DAYS",
//     "24/7 CUSTOMER SUPPORT",
//   ];

//   useGSAP(() => {
//     // total width = half (because we duplicate the list)
//     const totalWidth = sliderRef.current.scrollWidth / 2;

//     gsap.to(sliderRef.current, {
//       x: -totalWidth,
//       duration: 9, // slower for readability
//       ease: "none",
//       repeat: -1,
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//       },
//     });
//   }, []);

//   return (
//     <div className="flex sticky z-50 top-5 text-[#33383c] justify-center">
//       <div className="w-full max-w-3xl gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg overflow-hidden">
//         <div ref={containerRef} className="flex">
//           {/* Duplicate list for seamless loop */}
//           <div ref={sliderRef} className="flex gap-10">
//             {[...data,...data].map((item, index) => (
//               <li
//                 key={index}
//                 className="list-none text-[#33383c] text-xs whitespace-nowrap"
//               >
//                 {item}
//               </li>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpperNav;


"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const UpperNav = () => {
  const containerRef: any = useRef(null);
  const sliderRef: any = useRef(null);

  const data = [
    "FREE SHIPPING ON ALL ORDERS",
    "FREE RETURNS WITHIN 30 DAYS",
    "24/7 CUSTOMER SUPPORT",
  ];

  useGSAP(() => {
    if (!sliderRef.current) return;
    
    const totalWidth = sliderRef.current.scrollWidth / 2;
    const duration = window.innerWidth < 768 ? 15 : 9; // Slower on mobile for better readability

    gsap.to(sliderRef.current, {
      x: -totalWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  return (
    <div className="flex sticky z-50 top-2 sm:top-3 md:top-5 text-[#33383c] justify-center px-3 sm:px-4">
      <div className=" max-w-[80%] py-2 px-3 sm:px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg overflow-hidden">
        <div ref={containerRef} className="flex">
          {/* Duplicate list for seamless loop */}
          <div ref={sliderRef} className="flex mx-4 gap-6 sm:gap-8 md:gap-10">
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="text-[#33383c] text-xs sm:text-sm whitespace-nowrap flex items-center"
              >
                {item}
                {/* Add separator dots between items except the last one */}
                {index < [...data, ...data].length - 1 && (
                  <span className="ml-6 sm:ml-8 md:ml-10 opacity-50">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;