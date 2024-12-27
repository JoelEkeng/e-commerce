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
  { name: "All Accessories", items: ["Shop All Accessories"] },
  { name: "Mobile Accessories", items: ["All Accessories", "Phone Accessories", "Tablets Accessories", "Wearable Accessories", "Buds Accessories", "SmartThings Accessories"] },
  { name: "TV & Audio Accessories", items: ["All Tv Accessories", "Tv Stands", "Tv Wall Mounts", "TV Bezels", "JBL Audio", "All Home Audio Accessories"] },
  { name: "Appliance Accessories", items: ["Bespoke Refrigerator Panels", "Refrigerator Water Filters", "Laundry Accessories", "Range Accessories", "Vacuum Accessories", "All Accessories"] },
  { name: "Computing Accessories", items: ["Shop All Accessories"] },
];

export function Accessories() {
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
            Accessories
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full p-6 rounded-xl shadow-lg bg-white grid grid-cols-6 gap-4 relative right-12"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {shops.map((shop) => (
          <DropdownMenuGroup key={shop.name}>
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
