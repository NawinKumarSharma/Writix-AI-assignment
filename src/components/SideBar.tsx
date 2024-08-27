"use client";
import Link from "next/link";
import {
  Bell,
  FileVideo,
  Home,
  LineChart,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "./ui/progress";

const SideBar = () => {
  return (
    <div>
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <ShoppingCart className="h-4 w-4" />
          Premium
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          <FileVideo className="h-4 w-4" />
          ALL MOVIES AND SERIES{" "}
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Users className="h-4 w-4" />
          Broadcast
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <LineChart className="h-4 w-4" />
          Analytics
        </Link>
        <div className="mt-10">
          <p className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all cursor-pointer">
            Progress - <span className="font-bold text-green-500">78%</span>
          </p>
          <Progress value={78} />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
