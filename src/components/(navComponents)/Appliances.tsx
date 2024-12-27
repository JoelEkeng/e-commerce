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
  { name: "Offers & Deals", items: ["Appliance offers"] },
  { name: "Bespoke", items: ["Bespoke Home", "Bespoke Design Studio", "Bespoke Kitchen", "Bespoke Refrigerators", "Bespoke AI Laundry", "Bespoke Vacuums"] },
  { name: "Kitchen", items: ["Refrigerators", "Ranges", "Dashwashers", "Microwaves", "Wall Ovens", "Cooktops", "Range Hoods", "Built-in Appliances"] },
  { name: "Laundry", items: ["Discover Laundry", "Washers", "Dryers", "Washer & Dryer Sets", "Washer Dryer Combo"] },
  { name: "Vacuums", items: ["Discover Vacuums", "Jet Stick Vacuums", "Rovot Vacuums","Shop all Vacuums"] },
  { name: "Cooling & Heating", items: ["Single-room Systems", "Whole-Home System", "Commerical Solutions"] },
  { name: "Decor: Luxury Appliances", items: ["Discover Exclusive Collection"] },  
  { name: "Accessories", items: ["Bespoke Refrigerator Panels", "Refrigerator Water Filters", "Laundry Accessories","Range Accrssories", "All Appliance Accessories"] },
];

export function Appliances() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(true)}
        >
          <Button variant={"link"} className="font-bold text-md">Appliances</Button>
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
