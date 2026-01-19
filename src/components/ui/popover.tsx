// import * as Popover from "@radix-ui/react-popover";
// import {
//   Command,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "cmdk";
// import { Check } from "lucide-react";

// type Option = {
//   label: string;
//   value: string;
// };

// export function Combobox({
//   options,
//   value,
//   onChange,
//   placeholder = "Select option...",
// }: {
//   options: Option[];
//   value?: string;
//   onChange: (value: string) => void;
//   placeholder?: string;
// }) {
//   const selected = options.find((o) => o.value === value);

//   return (
//     <Popover.Root>
//       <Popover.Trigger asChild>
//         <button className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left">
//           {selected?.label ?? placeholder}
//         </button>
//       </Popover.Trigger>

//       <Popover.Content
//         className="w-[--radix-popover-trigger-width] rounded-md border bg-white p-1 shadow-lg"
//         align="start"
//       >
//         <Command>
//           <CommandInput placeholder="Search..." />

//           <CommandList>
//             {options.map((option) => (
//               <CommandItem
//                 key={option.value}
//                 value={option.value}
//                 onSelect={() => onChange(option.value)}
//                 className="flex items-center justify-between px-2 py-1"
//               >
//                 {option.label}
//                 {option.value === value && (
//                   <Check className="h-4 w-4" />
//                 )}
//               </CommandItem>
//             ))}
//           </CommandList>
//         </Command>
//       </Popover.Content>
//     </Popover.Root>
//   );
// }
