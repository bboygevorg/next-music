import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/shared/lib/utils";

interface IconButtonProps {
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
  disabled,
  type,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400"
      )}
    >
      {type === "plus" ? <Plus /> : <Minus />}
    </Button>
  );
};
