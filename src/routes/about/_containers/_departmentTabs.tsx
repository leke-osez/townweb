import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Department } from "@/data/general";
import { cn } from "@/utils/style";
import type { ReactNode } from "react";

type Props = {
  activeTabId: Department | string;
  handleTab: (id: Department | string) => void;
};

const tabList: Array<{
  name: string;
  id: Department;
}> = [
  // { name: Department.ALL, id: Department.ALL },
  { name: Department.MANAGEMENT, id: Department.MANAGEMENT },
  { name: Department.OPERATIONS, id: Department.OPERATIONS },
  { name: Department.PRODUCT, id: Department.PRODUCT },
  { name: Department.PROJECTS, id: Department.PROJECTS },
  {
    name: Department.CUSTOMER_SUCCESS,
    id: Department.CUSTOMER_SUCCESS,
  },
  { name: Department.SALES, id: Department.SALES },
];

function DepartmentTabs({ activeTabId, handleTab }: Props) {
  return (
    <div className="flex gap-4">
      <div className="md:flex hidden">
        {tabList.map((tab) => (
          <Tab
            key={tab.id}
            isActive={activeTabId === tab.id}
            handleTab={handleTab}
            id={tab.id}
          >
            {tab.name}
          </Tab>
        ))}
      </div>

      <div className="md:hidden">
        <Select onValueChange={(value) => handleTab(value)}>
          <SelectTrigger className="text-gray-800 font-medium">
            {tabList
              .find((tab) => tab.id === activeTabId)
              ?.name?.toUpperCase()}
          </SelectTrigger>
          <SelectContent>
            {tabList.map((tab) => (
              <SelectItem
                key={tab.id}
                value={tab.id}
                onSelect={() => handleTab(tab.id)}
                className={cn(
                  "p-2 text-sm md:text-base capitalize hover:bg-gray-100 rounded-md cursor-pointer",
                  activeTabId === tab.id ? "bg-gray-200" : "",
                )}
              >
                {tab.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

const Tab = ({
  children,
  isActive,
  handleTab,
  id,
}: {
  children: ReactNode;
  isActive: boolean;
  handleTab: (id: Department) => void;
  id: Department;
}) => {
  return (
    <Button
      className="transition h-auto p-2 pb-0 text-sm xl:text-base capitalize w-fit flex flex-col "
      variant={"plain"}
      onClick={() => handleTab(id)}
    >
      <p className={cn(isActive ? "text-black" : "text-gray-600")}>
        {typeof children === "string"
          ? children.toUpperCase()
          : children}
      </p>
      {isActive && (
        <div className="w-[105%] h-1 rounded-full bg-blue-500"></div>
      )}
    </Button>
  );
};

export default DepartmentTabs;
