import { IIteam } from "./types";

export interface CartItem {
  item: IIteam;
  size: string;
  orderId: number,
  amount: number;
}


export interface Cart {
  cart: CartItem[];
}

export interface User {
  id: number,
  name: string,
  address: string,
}

interface status {
  inProgress: boolean;
  completed: boolean;
  customerRefusal: boolean;
  sellerRefusal: boolean;
}

export interface OrderList {
  orderId: number,
  orderItems: CartItem[],
  price: number,
  status: status,
  payed: boolean,
  customer: User,
}
