"use client";
import React, { useState } from "react";
import { PremiumProduct, ProductCategory } from "../types/premiumProduct";
import PremiumProductCard from "../Components/PremiumProduct";

const PremiumProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "gadgets" | "fashion" | "home-decor"
  >("all");
  const [sortBy, setSortBy] = useState<
    "featured" | "price-high" | "price-low" | "rating"
  >("featured");

  const categories: ProductCategory[] = [
    {
      key: "all",
      label: "All Products",
      icon: "⭐",
      description: "Curated luxury collection",
    },
    {
      key: "gadgets",
      label: "Luxury Gadgets",
      icon: "📱",
      description: "Cutting-edge technology",
    },
    {
      key: "fashion",
      label: "High Fashion",
      description: "Designer apparel & accessories",
      icon: "👔",
    },
    {
      key: "home-decor",
      label: "Home Decor",
      icon: "🏠",
      description: "Premium home furnishings",
    },
  ];

  // Mock data - replace with actual API data
  const premiumProducts: PremiumProduct[] = [
    {
      id: "1",
      name: "Titanium Smartwatch Pro",
      description:
        "Limited edition smartwatch with sapphire crystal and titanium body. Advanced health monitoring and 30-day battery life.",
      price: 2499,
      originalPrice: 2999,
      currency: "USD",
      category: "gadgets",
      categoryLabel: "Luxury Gadgets",
      images: ["/products/smartwatch-premium.jpg"],
      brand: "AuraTech",
      features: [
        "Titanium Body",
        "Sapphire Crystal",
        "30-day Battery",
        "Health Monitoring",
      ],
      rating: 4.9,
      reviewCount: 127,
      affiliateLink: "#",
      isFeatured: true,
      tags: ["Limited Edition", "Waterproof", "Wireless Charging"],
      specifications: {
        Material: "Aerospace Titanium",
        Display: '1.5" AMOLED',
        Battery: "30 days",
        "Water Resistance": "100m",
      },
    },
    {
      id: "2",
      name: "Designer Leather Briefcase",
      description:
        "Handcrafted full-grain leather briefcase with platinum hardware. Timeless elegance for the modern professional.",
      price: 3200,
      currency: "USD",
      category: "fashion",
      categoryLabel: "High Fashion",
      images: ["/products/leather-briefcase.jpg"],
      brand: "Montgomery & Co",
      features: [
        "Full-grain Leather",
        "Platinum Hardware",
        "Lifetime Warranty",
        "Handcrafted",
      ],
      rating: 4.8,
      reviewCount: 89,
      affiliateLink: "#",
      isFeatured: true,
      tags: ["Handcrafted", "Limited Stock", "Executive"],
      specifications: {
        Material: "Italian Full-grain Leather",
        Hardware: "Solid Platinum",
        Dimensions: '16" x 12" x 6"',
        Warranty: "Lifetime",
      },
    },
    {
      id: "3",
      name: "Crystal Chandelier",
      description:
        "Artisanal crystal chandelier with 24k gold accents. Hand-cut crystals create breathtaking light patterns.",
      price: 18500,
      currency: "USD",
      category: "home-decor",
      categoryLabel: "Home Decor",
      images: ["/products/crystal-chandelier.jpg"],
      brand: "Lumiere Crystal",
      features: [
        "Hand-cut Crystal",
        "24k Gold Accents",
        "Custom Sizes",
        "Professional Installation",
      ],
      rating: 5.0,
      reviewCount: 34,
      affiliateLink: "#",
      isFeatured: false,
      tags: ["Customizable", "Artisanal", "Statement Piece"],
      specifications: {
        Crystals: "Hand-cut Swarovski",
        Finish: "24k Gold Plated",
        Height: 'Custom 36-60"',
        Installation: "Professional Included",
      },
    },
    {
      id: "4",
      name: "Noise-Canceling Headphones Elite",
      description:
        "Premium over-ear headphones with diamond-coated drivers and genuine leather ear cushions.",
      price: 1999,
      originalPrice: 2499,
      currency: "USD",
      category: "gadgets",
      categoryLabel: "Luxury Gadgets",
      images: ["/products/headphones-elite.jpg"],
      brand: "Sonus Lux",
      features: [
        "Diamond Drivers",
        "Memory Foam Ear Cups",
        "40hr Battery",
        "Active Noise Canceling",
      ],
      rating: 4.7,
      reviewCount: 203,
      affiliateLink: "#",
      isFeatured: false,
      tags: ["Audiophile", "Limited Edition", "Hi-Res Audio"],
      specifications: {
        Drivers: "40mm Diamond-coated",
        Battery: "40 hours",
        Connectivity: "Bluetooth 5.3",
        Materials: "Leather & Aluminum",
      },
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? premiumProducts
      : premiumProducts.filter(
          (product) => product.category === activeCategory
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-high":
        return b.price - a.price;
      case "price-low":
        return a.price - b.price;
      case "rating":
        return b.rating - a.rating;
      case "featured":
      default:
        return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Curated <span className="font-serif italic">Luxury</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
            Exceptional quality, timeless design, and unparalleled craftsmanship
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"></div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                    activeCategory === category.key
                      ? "bg-black text-white shadow-2xl"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-100"
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{category.label}</div>
                    <div className="text-sm opacity-70">
                      {category.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortBy(e.target.value as "featured" | "price-high" | "price-low" | "rating")

              }
              className="bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              Showing{" "}
              <span className="font-semibold">{sortedProducts.length}</span>{" "}
              curated luxury items
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available Worldwide
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Express Shipping
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <PremiumProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">Why Choose Premium?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Curated Selection</h3>
              <p className="text-gray-400">
                Every item handpicked for exceptional quality and design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-medium mb-2">White Glove Delivery</h3>
              <p className="text-gray-400">
                Premium packaging and personalized delivery service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-medium mb-2">
                Authenticity Guaranteed
              </h3>
              <p className="text-gray-400">
                Verified authenticity and manufacturer warranties
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumProductsPage;

// /PremuimProduct
