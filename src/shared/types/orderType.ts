// Generated by https://quicktype.io

import { User } from '@/shared/types/authType';

export interface ResOrder {
  data: Datum[];
  message: string;
}

export interface Datum {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  user_id: string;
  total_quantity: number;
  status: string;
  total_price: number;
  orderItems: OrderItem[];
  user: User;
}

export interface OrderItem {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  item_id: string;
  quantity: number;
  user_id: string;
  price: number;
  item: Item;
  is_reviewed: boolean;
}

export interface Item {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  name: string;
  description: string;
  quantity: number;
  price: number;
  cost: number;
  images: string[];
  stock: number;
  details: string;
  sku: string;
}