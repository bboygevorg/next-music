import React from "react";
import { Input, RangeSlider } from "../ui";
import { CheckBoxFiltersGroup, Title, FilterCheckbox } from "../shared";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">price</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            defaultValue={0}
          />
          <Input type="number" min={1000} max={5000} placeholder="5000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckBoxFiltersGroup
        title="View"
        className="mt-5"
        limit={5}
        defaultItems={[
          { text: "Sopranino", value: "1" },
          { text: "Soprano", value: "2" },
          { text: "Alt", value: "3" },
          { text: "Tenor", value: "4" },
          { text: "Bass", value: "5" },
        ]}
        items={[
          { text: "Sopranino", value: "1" },
          { text: "Soprano", value: "2" },
          { text: "Alt", value: "3" },
          { text: "Tenor", value: "4" },
          { text: "Bass", value: "5" },
        ]}
      />
    </div>
  );
};
