import Link from "next/link";
import React from "react";
import { Title } from "../shared";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bd-secondary rounded-lg h-[260px]">
          <img className="w-[80px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, est!
        </p>

        <div className="flex justify-beteen items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} $</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="w-5 h-5 mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
