// @ts-nocheck
'use client'

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const shops = [
  { name: "AI for All" },
  { name: "Galaxy Mobile AI" },
  { name: "Bespoke AI Appliances" },
  { name: "Samsung AI TV" }
];

export function AINav() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button variant={"link"} className="font-bold text-md" aria-haspopup="true">
            AI
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[240px] p-6 rounded-xl shadow-lg bg-white gap-4 relative left-12"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {shops.map((shop) => (
          <DropdownMenuGroup key={shop.name}>
            <div className="text-md hover:font-bold border-gray-300 pb-2 mb-4">
              {shop.name}
            </div>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
