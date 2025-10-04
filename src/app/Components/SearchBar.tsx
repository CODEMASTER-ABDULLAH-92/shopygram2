"use client";
import React, { useState, useEffect, useRef } from "react";
// import { ProductItem } from "../types/product";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
}

const products: Product[] = [
  { id: 1, name: "iPhone 15 Pro", category: "Electronics", description: "Latest Apple smartphone with A17 Pro chip", price: "$999" },
  { id: 2, name: "MacBook Air M2", category: "Electronics", description: "Lightweight laptop with Apple M2 chip", price: "$1099" },
  { id: 3, name: "Nike Air Max", category: "Shoes", description: "Comfortable running shoes with air cushioning", price: "$120" },
  { id: 4, name: "Samsung Galaxy Watch", category: "Watches", description: "Smartwatch with health monitoring features", price: "$299" },
  { id: 5, name: "Sony Headphones", category: "Electronics", description: "Noise cancelling wireless headphones", price: "$199" },
  { id: 6, name: "Levi's Jeans", category: "Clothes", description: "Classic denim jeans for everyday wear", price: "$59" },
  { id: 7, name: "Diamond Ring", category: "Jewelry", description: "Elegant diamond ring in gold setting", price: "$899" },
  { id: 8, name: "Kitchen Mixer", category: "Home & Kitchen", description: "Stand mixer for baking and cooking", price: "$249" },
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // ✅ FIXED: Explicitly typed ref
  const searchRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Filter search results
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const filteredResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsSearchOpen(true);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) console.log("Searching for:", searchQuery);
  };

  const handleResultClick = (product: Product) => {
    console.log("Product clicked:", product);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <div ref={searchRef} className="relative scale-100 duration-500 transition-all h-20 w-full max-w-xl mx-4">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products, brands, and categories..."
            className="w-full px-6 py-4 pl-12 pr-4 text-lg bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-200"
          />

          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Clear Button */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Results */}
        {isSearchOpen && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold text-gray-600">
                  Search Results ({searchResults.length})
                </h3>
                <span className="text-xs text-gray-500">Products</span>
              </div>

              <div className="space-y-2">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleResultClick(product)}
                    className="p-3 rounded-lg hover:bg-gray-50/80 cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {product.category}
                          </span>
                          <span className="text-sm font-bold text-green-600">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {isSearchOpen && searchQuery && searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl z-50 p-6 text-center">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-600 mb-1">No products found</h3>
            <p className="text-xs text-gray-500">Try different keywords or browse categories</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
