import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListCollapse } from "lucide-react";

interface DropDownProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  selectedType,
  setSelectedType,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <ListCollapse className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => setSelectedType("")}
          className={selectedType === "" ? "bg-gray-500" : ""}
        >
          All
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelectedType("movie")}
          className={selectedType === "movie" ? "bg-gray-500" : ""}
        >
          Movie
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelectedType("series")}
          className={selectedType === "series" ? "bg-gray-500" : ""}
        >
          Series
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
