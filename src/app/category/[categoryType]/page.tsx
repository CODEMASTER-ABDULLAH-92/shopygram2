
"use client";
import React, { useState, useMemo } from 'react';
import { Product, SortOption, ViewMode } from '../../lib/types';
import { FilterSidebar } from '@/app/Components/FilterSidebar';
import { ProductCard } from '@/app/Components/ProductCard';
import { ViewToggle } from '@/app/Components/viewToggle';
import { useParams } from 'next/navigation';

// Mock data - replace with actual data
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones with Noise Cancellation',
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 1247,
    brand: 'AudioTech',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
    affiliateUrl: 'https://example.com/affiliate/1',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Smart Fitness Watch with Heart Rate Monitor',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.2,
    reviewCount: 892,
    brand: 'FitGear',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics',
    affiliateUrl: 'https://example.com/affiliate/2',
  },
  {
    id: '3',
    title: 'MacBook Pro 16-inch Laptop',
    price: 2399.99,
    originalPrice: 2799.99,
    rating: 4.8,
    reviewCount: 567,
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'Electronics',
    affiliateUrl: 'https://example.com/affiliate/3',
  },

  // Fashion
  {
    id: '4',
    title: 'Premium Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.6,
    reviewCount: 234,
    brand: 'UrbanStyle',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    category: 'Jewelry',
    affiliateUrl: 'https://example.com/affiliate/4',
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Designer Running Shoes',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.3,
    reviewCount: 189,
    brand: 'RunPro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Jewelry',
    affiliateUrl: 'https://example.com/affiliate/5',
  },

  // Home & Kitchen
  {
    id: '6',
    title: 'Smart Coffee Maker with Grinder',
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.4,
    reviewCount: 312,
    brand: 'BrewMaster',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    category: 'Home & Kitchen',
    affiliateUrl: 'https://example.com/affiliate/6',
  },
  {
    id: '7',
    title: 'Air Purifier with HEPA Filter',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviewCount: 445,
    brand: 'PureAir',
    image: 'https://images.unsplash.com/photo-1581578021554-7b4b57ef5edf?w=400',
    category: 'Home & Kitchen',
    affiliateUrl: 'https://example.com/affiliate/7',
    isFeatured: true,
  },

  // Beauty
  {
    id: '8',
    title: 'Professional Hair Dryer',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 678,
    brand: 'StylePro',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
    category: 'beauty',
    affiliateUrl: 'https://example.com/affiliate/8',
  },
  {
    id: '9',
    title: 'Luxury Skincare Set',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 923,
    brand: 'GlowCare',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
    category: 'beauty',
    affiliateUrl: 'https://example.com/affiliate/9',
  },

  // Sports & Outdoors
  {
    id: '10',
    title: 'Professional Yoga Mat',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.6,
    reviewCount: 156,
    brand: 'FlexFit',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'sports-outdoors',
    affiliateUrl: 'https://example.com/affiliate/10',
  }
];

// Category metadata for dynamic content
const categoryMetadata: Record<string, { title: string; description: string }> = {
  electronics: {
    title: "Electronics & Gadgets",
    description: "Discover the latest tech gadgets, smartphones, laptops, and cutting-edge electronics"
  },
  fashion: {
    title: "Fashion & Apparel",
    description: "Explore trendy clothing, accessories, and stylish fashion items"
  },
  "home-kitchen": {
    title: "Home & Kitchen",
    description: "Upgrade your living space with smart home devices and kitchen essentials"
  },
  beauty: {
    title: "Beauty & Personal Care",
    description: "Find premium beauty products, skincare, and personal care items"
  },
  "sports-outdoors": {
    title: "Sports & Outdoors",
    description: "Gear up for your next adventure with quality sports and outdoor equipment"
  }
};

const CategoryPage: React.FC = () => {
  const params = useParams();
  const categoryType = params.categoryType as string;
  
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  // Get category-specific products and brands
  const { categoryProducts, categoryBrands } = useMemo(() => {
    const filteredProducts = mockProducts.filter(product => 
      product.category === categoryType
    );
    
    const brands = Array.from(new Set(filteredProducts.map(p => p.brand)));
    
    return {
      categoryProducts: filteredProducts,
      categoryBrands: brands
    };
  }, [categoryType]);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = categoryProducts.filter(product => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      
      return matchesBrand && matchesPrice && matchesRating;
    });

    // Sort products
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [categoryProducts, selectedBrands, priceRange, minRating, sortOption]);

  // Get category metadata
  const currentCategory = categoryMetadata[categoryType] || {
    title: categoryType?.charAt(0).toUpperCase() + categoryType?.slice(1) || 'Category',
    description: 'Discover amazing products in this category'
  };

  // Reset filters when category changes
  React.useEffect(() => {
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setMinRating(0);
    setSortOption('popularity');
  }, [categoryType]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{currentCategory.title}</h1>
          <p className="text-gray-600 mt-2">{currentCategory.description}</p>
          
          {/* Category Stats */}
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <span>{categoryProducts.length} products available</span>
            <span>{categoryBrands.length} brands</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              brands={categoryBrands}
              selectedBrands={selectedBrands}
              onBrandChange={setSelectedBrands}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="text-sm text-gray-600">
                Showing {filteredAndSortedProducts.length} of {categoryProducts.length} products
                {selectedBrands.length > 0 && ` in ${selectedBrands.length} selected brands`}
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                  <option value="rating">Sort by: Highest Rated</option>
                  <option value="newest">Sort by: Newest</option>
                </select>

                {/* View Toggle */}
                <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-6'
            }>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  {categoryProducts.length === 0 
                    ? `No products available in ${currentCategory.title} category.`
                    : 'Try adjusting your filters to see more results.'
                  }
                </p>
                {categoryProducts.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedBrands([]);
                      setPriceRange([0, 1000]);
                      setMinRating(0);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;