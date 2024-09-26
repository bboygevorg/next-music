import { Cart } from "@prisma/client";
import { CartDTO } from "../services/dto/cart.dto";
import { accessories } from "@/prisma/constants";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  accessories: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO) => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    accessories: item.accessories.map((accessorie) => ({
      name: accessorie.name,
      price: accessorie.price,
    })),
  }));
  return {
    items,
    totalAmount: data.totalAmount,
  };
};
