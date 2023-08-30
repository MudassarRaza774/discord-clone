"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type TooltipProps = {
  label: string;
  children: React.ReactNode;
  side?: "top" | "right" | "left" | "bottom";
  align?: "start" | "center" | "end";
};

export const ActionTooltip = ({
  label,
  children,
  side,
  align,
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild={true}>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className="font-semibold text-sm capitalize">
            {label.toLowerCase()}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
