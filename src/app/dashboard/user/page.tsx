// app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import { WishlistSection } from '@/app/Components/WishListSection';
import { RecentlyViewedSection } from '@/app/Components/recentViwedSection';
import { ComparisonSection } from '@/app/Components/ComparisonSection';
import { NotificationPreferences } from '@/app/Components/Notification';
import { mockUser, mockNotificationPreferences } from '../../../../public/assets';

import { Comparison } from '@/app/types/engagment';
// Mock data for the dashboard
const mockWishlist: WishlistItem[] = [
  {
    id: '1',
    product: {
      id: '101',
      title: 'Wireless Bluetooth Headphones',
      price: 129.99,
      originalPrice: 199.99,
      rating: 4.5,
      reviewCount: 1247,
      brand: 'AudioTech',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'electronics',
      affiliateUrl: 'https://example.com/affiliate/101'
    },
    addedAt: '2024-01-15T10:30:00Z'
  }
];

const mockRecentlyViewed: RecentlyViewed[] = [
  {
    id: '1',
    product: {
      id: '201',
      title: 'Smart Fitness Watch',
      price: 199.99,
      rating: 4.3,
      reviewCount: 892,
      brand: 'FitGear',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'electronics',
      affiliateUrl: 'https://example.com/affiliate/201'
    },
    viewedAt: '2024-01-20T14:45:00Z'
  }
];

const mockComparisons: Comparison[] = [
  {
    id: '1',
    products: [
      {
        id: '301',
        title: 'Gaming Laptop Pro',
        price: 1299.99,
        rating: 4.6,
        reviewCount: 567,
        brand: 'TechGaming',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
        category: 'electronics',
        affiliateUrl: 'https://example.com/affiliate/301'
      },
      {
        id: '302',
        title: 'Business Ultrabook',
        price: 1099.99,
        rating: 4.4,
        reviewCount: 342,
        brand: 'OfficeTech',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        category: 'electronics',
        affiliateUrl: 'https://example.com/affiliate/302'
      }
    ],
    createdAt: '2024-01-18T09:15:00Z',
    updatedAt: '2024-01-18T09:15:00Z'
  }
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('wishlist');
  const [wishlist, setWishlist] = useState(mockWishlist);
  const [recentlyViewed, setRecentlyViewed] = useState(mockRecentlyViewed);
  const [comparisons, setComparisons] = useState(mockComparisons);
  const [notificationPreferences, setNotificationPreferences] = useState(mockNotificationPreferences);

  const handleRemoveWishlistItem = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handleMoveToCart = (id: string) => {
    // Implement move to cart logic
    console.log('Move to cart:', id);
  };

  const handleClearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  const handleRemoveRecentlyViewed = (id: string) => {
    setRecentlyViewed(recentlyViewed.filter(item => item.id !== id));
  };

  const handleDeleteComparison = (id: string) => {
    setComparisons(comparisons.filter(comp => comp.id !== id));
  };

  const handleNewComparison = () => {
    // Navigate to product comparison page or open modal
    console.log('Start new comparison');
  };

  const handlePreferenceChange = (id: string, enabled: boolean) => {
    setNotificationPreferences(preferences =>
      preferences.map(pref =>
        pref.id === id ? { ...pref, enabled } : pref
      )
    );
  };

  const tabs = [
    { id: 'wishlist', name: 'Wishlist', icon: '❤️', count: wishlist.length },
    { id: 'recent', name: 'Recently Viewed', icon: '👀', count: recentlyViewed.length },
    { id: 'comparison', name: 'Comparisons', icon: '⚖️', count: comparisons.length },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {mockUser.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-900">{mockUser.name}</p>
                <p className="text-sm text-gray-600">{mockUser.email}</p>
              </div>
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
                {tab.count !== undefined && (
                  <span className="ml-2 bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === 'wishlist' && (
            <WishlistSection
              items={wishlist}
              onRemoveItem={handleRemoveWishlistItem}
              onMoveToCart={handleMoveToCart}
            />
          )}

          {activeTab === 'recent' && (
            <RecentlyViewedSection
              items={recentlyViewed}
              onClear={handleClearRecentlyViewed}
              onRemoveItem={handleRemoveRecentlyViewed}
            />
          )}

          {activeTab === 'comparison' && (
            <ComparisonSection
              comparisons={comparisons}
              onDeleteComparison={handleDeleteComparison}
              onNewComparison={handleNewComparison}
            />
          )}

          {activeTab === 'notifications' && (
            <NotificationPreferences
              preferences={notificationPreferences}
              onPreferenceChange={handlePreferenceChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}