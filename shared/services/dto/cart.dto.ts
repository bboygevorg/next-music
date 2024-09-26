import {
  Accessories,
  Cart,
  CartItem,
  Product,
  ProductItem,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  accessories: Accessories[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValue {
  productItemId: number;
  accessories?: number[];
  quantity: number;
}
