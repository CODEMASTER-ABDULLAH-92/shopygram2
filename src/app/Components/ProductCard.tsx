// components/ProductCard.tsx
import React from 'react';
import { Product, ViewMode } from '../types';

interface ProductCardProps {
  product: Product;
  viewMode: ViewMode;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline space-x-2">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>
                {renderStars(product.rating)}
              </div>
            </div>
            <p className="text-gray-700 mt-2 line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                ♡
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {product.isFeatured && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        
        {renderStars(product.rating)}
        
        <div className="flex items-baseline space-x-2">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
        
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-600 text-white text-center block py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </a>
      </div>
    </div>
  );
};