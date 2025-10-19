"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../lib/feature/datafeacture/dataSlice";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const LowerNav = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  // const [dealsOpen, setDealsOpen] = useState(false);
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
    "Home",
    "Kitchen",
    "Beauty",
    "Sports",
    "Outdoors",
    "Books",
    "Toys",
    "Games",
    "Automotive",
    "Computers",
    "Arts",
    "Automotive",
    "Baby",
    "Beauty",
    // Women's Fashion
    // Men's Fashion
    // Girls' Fashion
    // Boys' Fashion
    "Women",
    "Boys",
    "Girls",
    "Mens",
    "Health",
    "Home",
    "Industrial",
    "Scientific",
    "Luggage",
    "Movies",
    "Pet",
    "Software",
    "Sports",
    "Outdoors",
    "Tools",
    "Toys",
    "Games",
  ];

  // const deals = [
  //   "Today's Deals",
  //   "Flash Sales",
  //   "Discounts",
  //   "Clearance Sale",
  //   "Bundle Offers",
  //   "Seasonal Deals"
  // ];

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center ">
        {/* Desktop Navigation */}
        <div className="hidden md:flex min-w-[70vw] gap-6 lg:gap-10 py-2 px-2 rounded-md bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg justify-between items-center">
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
                <Link
                  href={"/category/categoryType"}
                  className="flex items-center gap-1"
                >
                  Categories
                  {/* <ChevronDown size={16} /> */}
                </Link>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer text-sm"
                      >
                        <Link
                          href={`/category/${category}`}
                          className="block w-full"
                        >
                          {category}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Deals Dropdown */}

              {/* <Link href={"/PremuimProduct"} className="cursor-pointer hover:text-black transition-colors whitespace-nowrap">
                Premium Products
              </Link>
              
              <Link href={"/blog"} className="cursor-pointer hover:text-black transition-colors">
                Blog
              </Link> */}

              <li
                onClick={changeVisibility}
                className="cursor-pointer hover:text-black transition-colors flex items-center gap-1"
              >
                {/* <Search size={16} /> */}
                Search
              </li>

              <Link
                href={"/contact"}
                className="cursor-pointer hover:text-black transition-colors"
              >
                Support
              </Link>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden min-w-[70vw]  py-2 px-2 bg-[#ebebeb94] backdrop-blur-md border border-white/30 shadow-lg rounded-md">
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
                    onClick={() => toggleMobileDropdown("categories")}
                    className="flex items-center justify-between w-full py-2 hover:text-black transition-colors text-left"
                  >
                    <span className="font-medium">Categories</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        mobileDropdown === "categories" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === "categories" && (
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
                {/* <li className="border-b border-gray-200/50 pb-2">
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
                </li> */}

                {/* <li className="border-b border-gray-200/50 pb-2">
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
                </li> */}

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
