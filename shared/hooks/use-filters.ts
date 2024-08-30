import { useRouter, useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  views: string;
  accessories: string;
}

export interface Filters {
  views: Set<string>;
  selectedAccessories: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setViews: (value: string) => void;
  setSelectedAccessories: (Value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const router = useRouter();

  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [selectedAccessories, { toggle: toggleAccessories }] = useSet(
    new Set<string>(searchParams.get("accessories")?.split(","))
  );

  const [views, { toggle: toggleViews }] = useSet(
    new Set<string>(
      searchParams.has("views") ? searchParams.get("views")?.split(",") : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filters = {
    ...prices,
    views: Array.from(views),
    accessories: Array.from(selectedAccessories),
  };

  return {
    views,
    selectedAccessories,
    prices,
    setPrices: updatePrice,
    setViews: toggleViews,
    setSelectedAccessories: toggleAccessories,
  };
};
