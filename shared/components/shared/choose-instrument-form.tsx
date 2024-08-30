import { cn } from "@/shared/lib/utils";
import React, { useEffect } from "react";
import { Title } from ".";
import { Button } from "../ui";
import { Accessories, ProductItem } from "@prisma/client";
import { AccessoriesItem } from "../shared/index";
import { useSet } from "react-use";
import { calcTotalInstrumentPrice } from "@/shared/lib";

interface Props {
  imageUrl: string;
  name: string;
  accessories: Accessories[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChooseInstrumentForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  accessories,
  items,
  onClickAddCart,
}) => {
  const textDetails = "Saxophone ";

  const [selectedAccessories, { toggle: addAccessories }] = useSet(
    new Set<number>([])
  );

  const totalPrice = calcTotalInstrumentPrice(
    items,
    accessories,
    selectedAccessories
  );

  // const availableInstrument = items.filter((item) => item.id === id);
  // const availableInstrumentColor = availableInstrument.map({
  //   name: items.name,
  //   value: items.value,
  //   disabled: !availableInstrument.some(
  //     (item) => Number(item.size) === Number(item.value)
  //   ),
  // });

  // useEffect(() => {
  // const currentSize = availableInstrumentColor?.find((item) => item.value === color)
  //   const availableColor = availableColorSixes?.find((item) => item.disabled)))

  //   if (availableColor) {
  //     setSize(Number(availablrSize.value) as InstrumentColor)
  //   }
  // }, [type])

  const totalAccessories = accessories
    .filter((accessories) => selectedAccessories.has(accessories.id))
    .reduce((acc, accessories) => acc + accessories.price, 0);

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      accessories: selectedAccessories,
    });
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[100px] h-[250px]"
        />
      </div>

      <div className="w-[490px] bg-[#F7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-15">
          <div className="grid grid-cols-3 gap-3">
            {accessories.map((accessories) => (
              <AccessoriesItem
                key={accessories.id}
                name={accessories.name}
                price={accessories.price}
                imageUrl={accessories.imageUrl}
                onClick={() => addAccessories(accessories.id)}
                active={selectedAccessories.has(accessories.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart in {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
