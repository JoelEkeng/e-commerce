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
  { name: "Offers & Deals", items: ["Tablets & Computing", "Mointor & Memory"] },
  { name: "Galaxy Books & Laptops", items: ["Discover Galaxy Books", "Galaxy Book5 Pro 360", "Galaxy Book4 Edge 14|16", "Galaxy Book4 Edge 15", "Galaxy Book 4 Ultra", "Galaxy Book4 Pro 360", "Galaxy Book4 Pro", "Galaxy Book4 360", "Galaxy Book4", "Galaxy Chromebook Plus", "Copilot+ PCs"] },
  { name: "Galaxy Book By Size", items: ['15.0"-16.0"', '13.0"-14.9"', "All Galaxy Book by Size"] },
  { name: "Tablets", items: ["Discover tablets", "Galaxy Tab S10 Ultra | S10+", "Galaxy Tab S9 Ultra | S9+ |S9", "Galaxy Tab S9 FE+ | S9FE", "Galaxy Tab A9+", "Galaxy Tab A9+ Kids Edition", "Shop all Tablets"] },
  { name: "Mointors", items: ["Discover Mointors", "Discover Odyseey Gaming", "Discover ViewFinity Mointors","OLED Gaming Mointors", "Smart Monitor", "High Resolution", "Business Monitors", "Shop all Mointors"] },
  { name: "Memory & Storage", items: ["Discoever Memory & Storage", "Sonic PRO Plus Sign up", "Internal SSDs", "Portable SSDs", "Memory Cards", "USB Flash Drives", "Discover Gaming SSDs", "SSD Magician Software", "Shop all Memory & Storage"] },
];

export function Computing() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(true)}
        >
          <Button variant={"link"} className="font-bold text-md">Computing</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full w-full p-6 rounded-xl shadow-lg bg-white grid grid-cols-6 gap-4 relative left-12"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {shops.map((shop, index) => (
          <DropdownMenuGroup key={index}>
            <div className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">
              {shop.name}
            </div>
            <div className="flex flex-col space-y-2">
              {shop.items.map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="text-sm hover:font-bold hover:text-primary cursor-pointer"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
