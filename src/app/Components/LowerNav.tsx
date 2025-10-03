// // "use client";
// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
// // import Link from "next/link";

// // const LowerNav = () => {
// //   const [categoriesOpen, setCategoriesOpen] = useState(false);
// //   const [dealsOpen, setDealsOpen] = useState(false);

// //   const dispatch = useDispatch();
// //   const changeVisiblty = ()=>{
// //     dispatch(toggleSearchBar());
// //   }
// //   const categories = [
// //     "Electronics",
// //     "Clothes",
// //     "Jewelry",
// //     "Watches",
// //     "Home & Kitchen",
// //     "Beauty & Personal Care",
// //     "Sports & Outdoors",
// //     "Books & Stationery",
// //     "Toys & Games",
// //     "Automotive"
// //   ];

// //   const deals = [
// //     "Today's Deals",
// //     "Flash Sales",
// //     "Discounts",
// //     "Clearance Sale",
// //     "Bundle Offers",
// //     "Seasonal Deals"
// //   ];

// //   return (
// //     <div className="sticky z-50">
// //       <div className="flex justify-center">
// //         <div className="w-full max-w-3xl gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg flex justify-between items-center">
// //           <div className="text-[#33383c] font-bold tracking-wide text-lg">
// //             Shopygram
// //           </div>
// //           <div>
// //             <ul className="flex text-[#33383c] justify-center items-center gap-6 font-medium">
// //               {/* Categories Dropdown */}
// //               <li 
// //                 className="relative cursor-pointer hover:text-black transition-colors"
// //                 onMouseEnter={() => setCategoriesOpen(true)}
// //                 onMouseLeave={() => setCategoriesOpen(false)}
// //               >
// //                 <Link href={"/category/categoryType"}>Categories</Link>
// //                 {categoriesOpen && (
// //                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
// //                     {categories.map((category, index) => (
// //                       <div
// //                         key={index}
// //                         className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
// //                       >
// //                         <Link href={`/category/${category}`}>{category}</Link>

// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </li>

// //               {/* Deals Dropdown */}
// //               <li 
// //                 className="relative cursor-pointer hover:text-black transition-colors"
// //                 onMouseEnter={() => setDealsOpen(true)}
// //                 onMouseLeave={() => setDealsOpen(false)}
// //               >
// //                 <Link href={"/deals"}>Deals</Link>
// //                 {dealsOpen && (
// //                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
// //                     {deals.map((deal, index) => (
// //                       <div
// //                         key={index}
// //                         className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
// //                       >
// //                         {deal}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 )}
// //               </li>

// //               <Link href={"/PremuimProduct"} className="cursor-pointer hover:text-black transition-colors">
// //                 Premium Products
// //               </Link>
// //               <li className="cursor-pointer hover:text-black transition-colors">
// //                 Blog
// //               </li>
// //               <li onClick={changeVisiblty}  className="cursor-pointer hover:text-black transition-colors">
// //                 Search
// //               </li>
// //               <Link href={"/contact"} className="cursor-pointer hover:text-black transition-colors">
// //                 Support
// //               </Link>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LowerNav;


// "use client";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
// import Link from "next/link";
// import { Menu, X, Search, ChevronDown } from "lucide-react";

// const LowerNav = () => {
//   const [categoriesOpen, setCategoriesOpen] = useState(false);
//   const [dealsOpen, setDealsOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

//   const dispatch = useDispatch();
  
//   const changeVisibility = () => {
//     dispatch(toggleSearchBar());
//   };

//   const categories = [
//     "Electronics",
//     "Clothes",
//     "Jewelry",
//     "Watches",
//     "Home & Kitchen",
//     "Beauty & Personal Care",
//     "Sports & Outdoors",
//     "Books & Stationery",
//     "Toys & Games",
//     "Automotive"
//   ];

//   const deals = [
//     "Today's Deals",
//     "Flash Sales",
//     "Discounts",
//     "Clearance Sale",
//     "Bundle Offers",
//     "Seasonal Deals"
//   ];

//   const toggleMobileDropdown = (dropdown: string) => {
//     setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
//   };

//   return (
//     <div className="sticky z-50">
//       <div className="flex justify-center">
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex w-full max-w-6xl gap-6 lg:gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg justify-between items-center">
//           <div className="text-[#33383c] font-bold tracking-wide text-lg lg:text-xl">
//             Shopygram
//           </div>
          
//           <nav>
//             <ul className="flex text-[#33383c] justify-center items-center gap-4 lg:gap-6 font-medium text-sm lg:text-base">
//               {/* Categories Dropdown */}
//               <li 
//                 className="relative cursor-pointer hover:text-black transition-colors"
//                 onMouseEnter={() => setCategoriesOpen(true)}
//                 onMouseLeave={() => setCategoriesOpen(false)}
//               >
//                 <Link href={"/category/categoryType"} className="flex items-center gap-1">
//                   Categories
//                   <ChevronDown size={16} />
//                 </Link>
//                 {categoriesOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
//                     {categories.map((category, index) => (
//                       <div
//                         key={index}
//                         className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
//                       >
//                         <Link href={`/category/${category}`} className="block w-full">
//                           {category}
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </li>

//               {/* Deals Dropdown */}
//               <li 
//                 className="relative cursor-pointer hover:text-black transition-colors"
//                 onMouseEnter={() => setDealsOpen(true)}
//                 onMouseLeave={() => setDealsOpen(false)}
//               >
//                 <Link href={"/deals"} className="flex items-center gap-1">
//                   Deals
//                   <ChevronDown size={16} />
//                 </Link>
//                 {dealsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
//                     {deals.map((deal, index) => (
//                       <div
//                         key={index}
//                         className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
//                       >
//                         <Link href={`/deals/${deal.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full">
//                           {deal}
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </li>

//               <Link href={"/PremuimProduct"} className="cursor-pointer hover:text-black transition-colors whitespace-nowrap">
//                 Premium Products
//               </Link>
              
//               <Link href={"/blog"} className="cursor-pointer hover:text-black transition-colors">
//                 Blog
//               </Link>
              
//               <li onClick={changeVisibility} className="cursor-pointer hover:text-black transition-colors flex items-center gap-1">
//                 <Search size={16} />
//                 Search
//               </li>
              
//               <Link href={"/contact"} className="cursor-pointer hover:text-black transition-colors">
//                 Support
//               </Link>
//             </ul>
//           </nav>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden  overflow-clip min-w-[70%]  py-2 px-4  bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg">
//           <div className="flex justify-between items-center">
//             <div className="text-[#33383c] font-bold tracking-wide text-lg">
//               Shopygram
//             </div>
            
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 rounded-md hover:bg-white/50 transition-colors"
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <nav className="mt-4 pb-4 border-t border-white/30 pt-4">
//               <ul className="space-y-3 text-[#33383c] font-medium">
//                 {/* Mobile Categories Dropdown */}
//                 <li>
//                   <button
//                     onClick={() => toggleMobileDropdown('categories')}
//                     className="flex items-center justify-between w-full py-2 hover:text-black transition-colors"
//                   >
//                     <span>Categories</span>
//                     <ChevronDown 
//                       size={16} 
//                       className={`transform transition-transform ${
//                         mobileDropdown === 'categories' ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                   {mobileDropdown === 'categories' && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-300 pl-4">
//                       {categories.map((category, index) => (
//                         <Link
//                           key={index}
//                           href={`/category/${category}`}
//                           className="block py-2 text-sm hover:text-black transition-colors"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {category}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>

//                 {/* Mobile Deals Dropdown */}
//                 <li>
//                   <button
//                     onClick={() => toggleMobileDropdown('deals')}
//                     className="flex items-center justify-between w-full py-2 hover:text-black transition-colors"
//                   >
//                     <span>Deals</span>
//                     <ChevronDown 
//                       size={16} 
//                       className={`transform transition-transform ${
//                         mobileDropdown === 'deals' ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                   {mobileDropdown === 'deals' && (
//                     <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-300 pl-4">
//                       {deals.map((deal, index) => (
//                         <Link
//                           key={index}
//                           href={`/deals/${deal.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="block py-2 text-sm hover:text-black transition-colors"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {deal}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </li>

//                 <li>
//                   <Link
//                     href={"/PremuimProduct"}
//                     className="block py-2 hover:text-black transition-colors"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Premium Products
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href={"/blog"}
//                     className="block py-2 hover:text-black transition-colors"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Blog
//                   </Link>
//                 </li>

//                 <li>
//                   <button
//                     onClick={() => {
//                       changeVisibility();
//                       setMobileMenuOpen(false);
//                     }}
//                     className="flex items-center gap-2 w-full py-2 hover:text-black transition-colors text-left"
//                   >
//                     <Search size={16} />
//                     Search
//                   </button>
//                 </li>

//                 <li>
//                   <Link
//                     href={"/contact"}
//                     className="block py-2 hover:text-black transition-colors"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Support
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LowerNav;


"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const LowerNav = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [dealsOpen, setDealsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const dispatch = useDispatch();
  
  const changeVisibility = () => {
    dispatch(toggleSearchBar());
  };

  const categories = [
    "Electronics",
    "Clothes",
    "Jewelry",
    "Watches",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Books & Stationery",
    "Toys & Games",
    "Automotive"
  ];

  const deals = [
    "Today's Deals",
    "Flash Sales",
    "Discounts",
    "Clearance Sale",
    "Bundle Offers",
    "Seasonal Deals"
  ];

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="sticky z-50">
      <div className="flex justify-center ">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full max-w-6xl gap-6 lg:gap-10 py-2 px-4 sm:px-6 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg justify-between items-center">
          <div className="text-[#33383c] font-bold tracking-wide text-lg lg:text-xl">
            Shopygram
          </div>
          
          <nav>
            <ul className="flex text-[#33383c] justify-center items-center gap-4 lg:gap-6 font-medium text-sm lg:text-base">
              {/* Categories Dropdown */}
              <li 
                className="relative cursor-pointer hover:text-black transition-colors"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <Link href={"/category/categoryType"} className="flex items-center gap-1">
                  Categories
                  <ChevronDown size={16} />
                </Link>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link href={`/category/${category}`} className="block w-full">
                          {category}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Deals Dropdown */}
              <li 
                className="relative cursor-pointer hover:text-black transition-colors"
                onMouseEnter={() => setDealsOpen(true)}
                onMouseLeave={() => setDealsOpen(false)}
              >
                <Link href={"/deals"} className="flex items-center gap-1">
                  Deals
                  <ChevronDown size={16} />
                </Link>
                {dealsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {deals.map((deal, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link href={`/deals/${deal.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full">
                          {deal}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <Link href={"/PremuimProduct"} className="cursor-pointer hover:text-black transition-colors whitespace-nowrap">
                Premium Products
              </Link>
              
              <Link href={"/blog"} className="cursor-pointer hover:text-black transition-colors">
                Blog
              </Link>
              
              <li onClick={changeVisibility} className="cursor-pointer hover:text-black transition-colors flex items-center gap-1">
                <Search size={16} />
                Search
              </li>
              
              <Link href={"/contact"} className="cursor-pointer hover:text-black transition-colors">
                Support
              </Link>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden min-w-[80%]  py-2 px-4 bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg rounded-md">
          <div className="flex justify-between items-center">
            <div className="text-[#33383c] font-bold tracking-wide text-lg truncate">
              Shopygram
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/50 transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 pb-2 border-t border-white/30 pt-4">
              <ul className="space-y-2 text-[#33383c] font-medium">
                {/* Mobile Categories Dropdown */}
                <li className="border-b border-gray-200/50 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown('categories')}
                    className="flex items-center justify-between w-full py-2 hover:text-black transition-colors text-left"
                  >
                    <span className="font-medium">Categories</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${
                        mobileDropdown === 'categories' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileDropdown === 'categories' && (
                    <div className="mt-2 space-y-1 bg-white/50 rounded-lg p-2 mx-1">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/category/${category}`}
                          className="block py-2 px-3 text-sm hover:text-black hover:bg-white/70 transition-colors rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Mobile Deals Dropdown */}
                <li className="border-b border-gray-200/50 pb-2">
                  <button
                    onClick={() => toggleMobileDropdown('deals')}
                    className="flex items-center justify-between w-full py-2 hover:text-black transition-colors text-left"
                  >
                    <span className="font-medium">Deals</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${
                        mobileDropdown === 'deals' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileDropdown === 'deals' && (
                    <div className="mt-2 space-y-1 bg-white/50 rounded-lg p-2 mx-1">
                      {deals.map((deal, index) => (
                        <Link
                          key={index}
                          href={`/deals/${deal.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block py-2 px-3 text-sm hover:text-black hover:bg-white/70 transition-colors rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {deal}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <Link
                    href={"/PremuimProduct"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Premium Products
                  </Link>
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <Link
                    href={"/blog"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>

                <li className="border-b border-gray-200/50 pb-2">
                  <button
                    onClick={() => {
                      changeVisibility();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full py-2 hover:text-black transition-colors text-left font-medium"
                  >
                    <Search size={16} />
                    Search
                  </button>
                </li>

                <li>
                  <Link
                    href={"/contact"}
                    className="block py-2 hover:text-black transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowerNav;