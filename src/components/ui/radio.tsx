import { cn } from "@/utils/style";
import * as RadioPrimitive from "@radix-ui/react-radio-group";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

export const RadioPrimitiveRoot = forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <RadioPrimitive.Root
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children}
  </RadioPrimitive.Root>
));

export const RadioItem = forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Item> & {
    labelClass?: string;
  }
>(({ className, children, labelClass, ...props }) => (
  <div className="flex items-center gap-2 mt-3">
    <RadioPrimitive.Item
      className={cn(
        "relative mt-1 h-5 w-5 shrink-0 rounded-full border border-slate-400",
        "data-[state=checked]:border-blue-600",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="flex items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Item>
    <label className={cn(labelClass)} htmlFor={props.id}>
      {children}
    </label>
  </div>
));

type RadioContainerProps = {
  title: string;
  titleClass?: string;
  itemList: Array<{ id: string; value: string; label: string }>;
  onValueChange: (val: string) => void;
  className?: string;
};

export const RadioContainer = ({
  title,
  titleClass,
  itemList,
  onValueChange,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof RadioPrimitiveRoot> &
  RadioContainerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className={cn("text-gray-600 font-medium", titleClass)}>
        {title}
      </p>
      <RadioPrimitiveRoot
        {...props}
        className={cn(
          "flex flex-col w-full gap-1 text-sm font-normal",
          className
        )}
        // defaultValue={BuildDuration.NEXT_FEW_MONTHS}
        onValueChange={onValueChange}
      >
        <div className="ml-4">
          {itemList.map((item) => (
            <RadioItem key={item.id} id={item.id} value={item.value}>
              {item.label}
            </RadioItem>
          ))}
        </div>
      </RadioPrimitiveRoot>
    </div>
  );
};
