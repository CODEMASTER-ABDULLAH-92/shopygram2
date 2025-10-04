import { PremiumProduct } from '@/app/types/premiumProduct';

export interface WishlistItem {
  id: string;
  product: PremiumProduct;
  addedAt: string;
}

export interface RecentlyViewed {
  id: string;
  product: PremiumProduct;
  viewedAt: string;
}

export interface Comparison {
  id: string;
  products: PremiumProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface NotificationPreference {
  id: string;
  type: 'email' | 'push' | 'browser';
  name: string;
  description: string;
  enabled: boolean;
}