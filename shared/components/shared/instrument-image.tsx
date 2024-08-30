import { cn } from "@/shared/lib/utils";
import { View } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  view: "soprano" | "alt" | "tenor";
}

export const InstrumentImage: React.FC<Props> = ({
  imageUrl,
  view,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Logo"
        className={cn(
          "relative left-2 top-2 transition-all z-10 duration-300",
          {
            "w-[300px] h-[300px]": view === "soprano",
            "w-[400px] h-[400px]": view === "alt",
            "w-[500px] h-[500px]": view === "tenor",
          }
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]"></div>
    </div>
  );
};
