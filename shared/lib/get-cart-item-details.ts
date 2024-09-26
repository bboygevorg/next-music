import { Accessories } from "@prisma/client";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
  accessories: CartStateItem["accessories"]
): string => {
  const details = [];

  if (accessories) {
    details.push(...accessories.map((accessories) => accessories.name));
  }

  return details.join(", ");
};
