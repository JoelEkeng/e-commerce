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
  { name: "Best of Samsung", items: ["New & Featured", "Holiday Gift Guide", "SmartThings", "Game Day Shop", "Teach For Kids", "Gaming Portal"] },
  { name: "Offers", items: ["All Offers", "Smartphones", "TV & Home Theater", "Appliances", "Watches & Audio", "Tablets & Computing", "Monitor, Memory & Storage"] },
  { name: "Carrier offers", items: ["Verizon Offers", "AT&T Offers", "T-Mobile Offers", "Sprint Offers", "US Cellular Offers", "Xfinity Mobile Offers"] },
];

export function ShopNav() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button variant={"link"} className="font-bold text-md">Shop</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full w-[760px] p-6 rounded-xl shadow-lg bg-white grid grid-cols-3 gap-4 relative left-12"
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
