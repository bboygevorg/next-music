import { Accessories, ProductItem } from "@prisma/client";

/**
 * function for total cost count
 * @param items
 * @param accessories
 * @param selectedAccessories
 * @returns number
 */

export const calcTotalInstrumentPrice = (
  items: ProductItem[],
  accessories: Accessories[],
  selectedAccessories: Set<number>
) => {
  const foundItem = items.find((item) => item.price);
  const price = foundItem ? foundItem.price : 0;
  const totalAccessoriesPrice = accessories
    .filter((accessories) => selectedAccessories.has(accessories.id))
    .reduce((acc, accessories) => acc + accessories.price, 0);

  return price + totalAccessoriesPrice;
};
