import { cn } from "@/shared/lib/utils";
import React from "react";
import { CountIconButton } from "./count-icon-button";

interface CountButtonProps {
  className?: string;
  onClick?: (type: "plus" | "minus") => void;
  value?: number;
}

export const CountButton: React.FC<CountButtonProps> = ({
  onClick,
  className,
  value = 1,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        type="minus"
      />

      <b>{value}</b>

      <CountIconButton onClick={() => onClick?.("plus")} type="plus" />
    </div>
  );
};
