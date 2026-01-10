import { cn } from "@/utils/style";
import { ComboboxInput as CbInput } from "@headlessui/react";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";

const ComboboxInput = forwardRef<
  ComponentRef<typeof CbInput>,
  ComponentPropsWithoutRef<typeof CbInput>
>(({ className, ...props }, ref) => {
  return (
    <CbInput
      ref={ref}
      {...props}
      className={cn(
        "flex h-9 w-full rounded border border-[#e0e0e0] bg-transparent px-3 py-0.5 text-sm ring-0 ring-offset-transparent transition-colors [appearance:textfield] placeholder:opacity-80 hover:bg-secondary/20 focus:border-primary focus:bg-secondary/20 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        "file:border-0 file:bg-transparent file:pt-1 file:text-sm file:font-medium file:text-primary"
      )}
    />
  );
});

export { ComboboxInput };
