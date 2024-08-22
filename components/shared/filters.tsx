"use client";

import React, { useEffect } from "react";
import { Input, RangeSlider } from "../ui";
import { CheckBoxFiltersGroup, Title, FilterCheckbox } from "../shared";
import { useAccessories, useQueryFilters, useFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { accessories, loading } = useAccessories();

  const filters = useFilters();
  useQueryFilters(filters);

  const items = accessories.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <CheckBoxFiltersGroup
        name="view"
        className="mb-5"
        title="views"
        onClickChekbox={filters.setViews}
        selected={filters.views}
        items={[
          { text: "Soprano", value: "Soprano" },
          { text: "Alt", value: "Alt" },
          { text: "Tenor", value: "Tenor" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">price</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={1000}
            max={5000}
            placeholder="5000"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 5000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckBoxFiltersGroup
        title="View"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickChekbox={filters.setSelectedAccessories}
        selected={filters.selectedAccessories}
        name="accessories"
      />
    </div>
  );
};
