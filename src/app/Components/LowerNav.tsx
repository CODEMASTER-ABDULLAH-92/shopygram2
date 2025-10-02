"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
import Link from "next/link";

const LowerNav = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [dealsOpen, setDealsOpen] = useState(false);
  const showSearch = useSelector((state) => state.variable.showSearchBar);
  const dispatch = useDispatch();
  const changeVisiblty = ()=>{
    dispatch(toggleSearchBar());
  }
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

  return (
    <div className="sticky z-50">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl gap-10 py-2 px-4 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg flex justify-between items-center">
          <div className="text-[#33383c] font-bold tracking-wide text-lg">
            Shopygram
          </div>
          <div>
            <ul className="flex text-[#33383c] justify-center items-center gap-6 font-medium">
              {/* Categories Dropdown */}
              <li 
                className="relative cursor-pointer hover:text-black transition-colors"
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <Link href={"/category/categoryType"}>Categories</Link>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link href={`/category/${category}`}>{category}</Link>

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
                <Link href={"/deals"}>Deals</Link>
                {dealsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {deals.map((deal, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        {deal}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <Link href={"/PremuimProduct"} className="cursor-pointer hover:text-black transition-colors">
                Premium Products
              </Link>
              <li className="cursor-pointer hover:text-black transition-colors">
                Blog
              </li>
              <li onClick={changeVisiblty}  className="cursor-pointer hover:text-black transition-colors">
                Search
              </li>
              <Link href={"/contact"} className="cursor-pointer hover:text-black transition-colors">
                Support
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;