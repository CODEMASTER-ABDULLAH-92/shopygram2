
// // 'use client';

// // import React, { useState } from 'react';
// // import { WishlistSection } from '@/app/Components/WishListSection';
// // import { RecentlyViewedSection } from '@/app/Components/recentViwedSection';
// // import { ComparisonSection } from '@/app/Components/ComparisonSection';
// // import { NotificationPreferences } from '@/app/Components/Notification';
// // import { mockUser, mockNotificationPreferences } from '../../../../public/assets';
// // import { Comparison } from '@/app/types/engagment';
// // import Image from 'next/image';

// // // ✅ Mock data (unchanged)
// // const mockWishlist = [ /* ... */ ];
// // const mockRecentlyViewed = [ /* ... */ ];
// // const mockComparisons: Comparison[] = [ /* ... */ ];

// // export default function UserDashboard() {
// //   const [activeTab, setActiveTab] = useState('wishlist');
// //   const [wishlist, setWishlist] = useState(mockWishlist);
// //   const [recentlyViewed, setRecentlyViewed] = useState(mockRecentlyViewed);
// //   const [comparisons, setComparisons] = useState(mockComparisons);
// //   const [notificationPreferences, setNotificationPreferences] = useState(mockNotificationPreferences);

// //   // ✅ Handlers (unchanged)
// //   const handleRemoveWishlistItem = (id: string) => setWishlist(wishlist.filter(item => item.id !== id));
// //   const handleMoveToCart = (id: string) => console.log('Move to cart:', id);
// //   const handleClearRecentlyViewed = () => setRecentlyViewed([]);
// //   const handleRemoveRecentlyViewed = (id: string) => setRecentlyViewed(recentlyViewed.filter(item => item.id !== id));
// //   const handleDeleteComparison = (id: string) => setComparisons(comparisons.filter(comp => comp.id !== id));
// //   const handleNewComparison = () => console.log('Start new comparison');
// //   const handlePreferenceChange = (id: string, enabled: boolean) => {
// //     setNotificationPreferences(prefs =>
// //       prefs.map(pref => pref.id === id ? { ...pref, enabled } : pref)
// //     );
// //   };

// //   const tabs = [
// //     { id: 'wishlist', name: 'Wishlist', icon: '❤️', count: wishlist.length },
// //     { id: 'recent', name: 'Recently Viewed', icon: '👀', count: recentlyViewed.length },
// //     { id: 'comparison', name: 'Comparisons', icon: '⚖️', count: comparisons.length },
// //     { id: 'notifications', name: 'Notifications', icon: '🔔' },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 pt-14 sm:pt-20">
// //       {/* Header */}
// //       <div className="bg-white border-b border-gray-200">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4 sm:gap-6">
// //             <div>
// //               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Dashboard</h1>
// //               <p className="text-gray-600 mt-1 text-sm sm:text-base">
// //                 Welcome back, {mockUser.name}!
// //               </p>
// //             </div>

// //             {/* User Profile */}
// //             <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
// //               <div className="flex flex-col text-sm sm:text-base">
// //                 <p className="font-medium text-gray-900">{mockUser.name}</p>
// //                 <p className="text-xs sm:text-sm text-gray-600 break-words sm:break-normal max-w-[200px] sm:max-w-none">
// //                   {mockUser.email}
// //                 </p>
// //               </div>
// //               <div className="relative w-10 h-10 sm:w-12 sm:h-12">
// //                 <Image
// //                   src={mockUser.avatar}
// //                   alt={mockUser.name}
// //                   fill
// //                   sizes="(max-width: 640px) 40px, 48px"
// //                   className="rounded-full object-cover"
// //                   priority
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Body */}
// //       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
// //         {/* Tabs (Mobile) */}
// //         <div className="sm:hidden mb-6">
// //           <select
// //             value={activeTab}
// //             onChange={(e) => setActiveTab(e.target.value)}
// //             className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
// //           >
// //             {tabs.map(tab => (
// //               <option key={tab.id} value={tab.id}>
// //                 {tab.icon} {tab.name} {tab.count !== undefined && `(${tab.count})`}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Tabs (Desktop) */}
// //         <div className="hidden sm:block border-b border-gray-200 mb-6">
// //           <nav className="-mb-px flex space-x-6 lg:space-x-10 overflow-x-auto scrollbar-hide">
// //             {tabs.map(tab => (
// //               <button
// //                 key={tab.id}
// //                 onClick={() => setActiveTab(tab.id)}
// //                 className={`whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm sm:text-base transition-colors ${
// //                   activeTab === tab.id
// //                     ? 'border-blue-500 text-blue-600'
// //                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
// //                 }`}
// //               >
// //                 <span className="mr-2">{tab.icon}</span>
// //                 {tab.name}
// //                 {tab.count !== undefined && (
// //                   <span className="ml-2 bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs">
// //                     {tab.count}
// //                   </span>
// //                 )}
// //               </button>
// //             ))}
// //           </nav>
// //         </div>

// //         {/* Tab Content */}
// //         <div className="mt-6">
// //           {activeTab === 'wishlist' && (
// //             <WishlistSection items={wishlist} onRemoveItem={handleRemoveWishlistItem} onMoveToCart={handleMoveToCart} />
// //           )}
// //           {activeTab === 'recent' && (
// //             <RecentlyViewedSection items={recentlyViewed} onClear={handleClearRecentlyViewed} onRemoveItem={handleRemoveRecentlyViewed} />
// //           )}
// //           {activeTab === 'comparison' && (
// //             <ComparisonSection comparisons={comparisons} onDeleteComparison={handleDeleteComparison} onNewComparison={handleNewComparison} />
// //           )}
// //           {activeTab === 'notifications' && (
// //             <NotificationPreferences preferences={notificationPreferences} onPreferenceChange={handlePreferenceChange} />
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState } from 'react';
// import { WishlistSection } from '@/app/Components/WishListSection';
// import { RecentlyViewedSection } from '@/app/Components/recentViwedSection';
// import { ComparisonSection } from '@/app/Components/ComparisonSection';
// import { NotificationPreferences } from '@/app/Components/Notification';
// import { mockUser, mockNotificationPreferences } from '../../../../public/assets';
// import { Comparison, WishlistItem, RecentlyViewedItem } from '@/app/types/engagment';
// import Image from 'next/image';

// // ✅ Mock data (typed properly)
// const mockWishlist: WishlistItem[] = [
//   {
//     id: '1',
//     name: 'Apple AirPods Pro',
//     price: '$249',
//     image: '/assets/airpods.jpg',
//     category: 'Electronics',
//   },
//   {
//     id: '2',
//     name: 'Nike Running Shoes',
//     price: '$120',
//     image: '/assets/shoes.jpg',
//     category: 'Footwear',
//   },
// ];

// const mockRecentlyViewed: RecentlyViewedItem[] = [
//   {
//     id: '3',
//     name: 'MacBook Air M2',
//     price: '$1199',
//     image: '/assets/macbook.jpg',
//     category: 'Laptops',
//   },
//   {
//     id: '4',
//     name: 'iPhone 15 Pro',
//     price: '$999',
//     image: '/assets/iphone.jpg',
//     category: 'Mobiles',
//   },
// ];

// const mockComparisons: Comparison[] = [
//   {
//     id: 'comp1',
//     items: [
//       { id: '1', name: 'iPhone 15 Pro', price: '$999', category: 'Mobiles' },
//       { id: '2', name: 'Samsung S24 Ultra', price: '$1099', category: 'Mobiles' },
//     ],
//   },
// ];

// export default function UserDashboard() {
//   const [activeTab, setActiveTab] = useState('wishlist');
//   const [wishlist, setWishlist] = useState<WishlistItem[]>(mockWishlist);
//   const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>(mockRecentlyViewed);
//   const [comparisons, setComparisons] = useState<Comparison[]>(mockComparisons);
//   const [notificationPreferences, setNotificationPreferences] = useState(mockNotificationPreferences);

//   // ✅ Handlers
//   const handleRemoveWishlistItem = (id: string) =>
//     setWishlist(wishlist.filter(item => item.id !== id));

//   const handleMoveToCart = (id: string) => console.log('Move to cart:', id);

//   const handleClearRecentlyViewed = () => setRecentlyViewed([]);

//   const handleRemoveRecentlyViewed = (id: string) =>
//     setRecentlyViewed(recentlyViewed.filter(item => item.id !== id));

//   const handleDeleteComparison = (id: string) =>
//     setComparisons(comparisons.filter(comp => comp.id !== id));

//   const handleNewComparison = () => console.log('Start new comparison');

//   const handlePreferenceChange = (id: string, enabled: boolean) => {
//     setNotificationPreferences(prefs =>
//       prefs.map(pref => (pref.id === id ? { ...pref, enabled } : pref))
//     );
//   };

//   const tabs = [
//     { id: 'wishlist', name: 'Wishlist', icon: '❤️', count: wishlist.length },
//     { id: 'recent', name: 'Recently Viewed', icon: '👀', count: recentlyViewed.length },
//     { id: 'comparison', name: 'Comparisons', icon: '⚖️', count: comparisons.length },
//     { id: 'notifications', name: 'Notifications', icon: '🔔' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-14 sm:pt-20">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4 sm:gap-6">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Dashboard</h1>
//               <p className="text-gray-600 mt-1 text-sm sm:text-base">
//                 Welcome back, {mockUser.name}!
//               </p>
//             </div>

//             {/* User Profile */}
//             <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
//               <div className="flex flex-col text-sm sm:text-base">
//                 <p className="font-medium text-gray-900">{mockUser.name}</p>
//                 <p className="text-xs sm:text-sm text-gray-600 break-words sm:break-normal max-w-[200px] sm:max-w-none">
//                   {mockUser.email}
//                 </p>
//               </div>
//               <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                 <Image
//                   src={mockUser.avatar}
//                   alt={mockUser.name}
//                   fill
//                   sizes="(max-width: 640px) 40px, 48px"
//                   className="rounded-full object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
//         {/* Tabs (Mobile) */}
//         <div className="sm:hidden mb-6">
//           <select
//             value={activeTab}
//             onChange={(e) => setActiveTab(e.target.value)}
//             className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
//           >
//             {tabs.map(tab => (
//               <option key={tab.id} value={tab.id}>
//                 {tab.icon} {tab.name} {tab.count !== undefined && `(${tab.count})`}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Tabs (Desktop) */}
//         <div className="hidden sm:block border-b border-gray-200 mb-6">
//           <nav className="-mb-px flex space-x-6 lg:space-x-10 overflow-x-auto scrollbar-hide">
//             {tabs.map(tab => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm sm:text-base transition-colors ${
//                   activeTab === tab.id
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 <span className="mr-2">{tab.icon}</span>
//                 {tab.name}
//                 {tab.count !== undefined && (
//                   <span className="ml-2 bg-gray-200 text-gray-700 py-0.5 px-2 rounded-full text-xs">
//                     {tab.count}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Tab Content */}
//         <div className="mt-6">
//           {activeTab === 'wishlist' && (
//             <WishlistSection
//               items={wishlist}
//               onRemoveItem={handleRemoveWishlistItem}
//               onMoveToCart={handleMoveToCart}
//             />
//           )}
//           {activeTab === 'recent' && (
//             <RecentlyViewedSection
//               items={recentlyViewed}
//               onClear={handleClearRecentlyViewed}
//               onRemoveItem={handleRemoveRecentlyViewed}
//             />
//           )}
//           {activeTab === 'comparison' && (
//             <ComparisonSection
//               comparisons={comparisons}
//               onDeleteComparison={handleDeleteComparison}
//               onNewComparison={handleNewComparison}
//             />
//           )}
//           {activeTab === 'notifications' && (
//             <NotificationPreferences
//               preferences={notificationPreferences}
//               onPreferenceChange={handlePreferenceChange}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'

const Page = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid voluptatem unde enim perspiciatis, nisi distinctio facere maiores! Fugit sed nam deserunt sequi molestiae eum corrupti voluptatem quidem veritatis magnam. Asperiores?
    </div>
  )
}

export default Page
