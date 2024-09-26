import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const accesoriesPrice = item.accessories.reduce(
    (acc, accesorie) => acc + accesorie.price,
    0
  );

  return (accesoriesPrice + item.productItem.price) * item.quantity;
};
