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
const DropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <ListCollapse className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>All</DropdownMenuLabel>
          <DropdownMenuLabel>Movie</DropdownMenuLabel>
          <DropdownMenuItem>Series</DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
