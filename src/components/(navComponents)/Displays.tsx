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
  { name: "Monitors", items: ["Discover Monitors", "Discover Odyssey Gaming", "Discover ViewFinity Monitors", "OLED Gaming Monitor", "Gaming Monitors", "Smart Monitors", "High Resolution", "Business Monitors", "Shop all Monitors"] },
  { name: "Consumer Displays", items: ["Interactive Displays", "The Wall All-in-One", "Pro TV", "Pro TV Terrace Edition"] },
  { name: "Business Products", items: ['Smart Signage', 'Indoor LED Signage', "Outdoor LED Signage", "Commercial TVs", "Digital Signage Accessories", "VXT - Content & Remote Management"] },
  { name: "Industry Solutions", items: ["Education Signage", "Live Events and Sports Signage", "Corporate Signage", "Retail Signage", "Quick-Service Restaurant Signage", "Hospitality Signage"] },
  { name: "Software & Services", items: ["Custom A/V Home Installations", "Hostel Device & Content Management", "MagicINFO - Signage Content Management", "VXT - Content & Remote Management"] },
];

export function Displays() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(true)}
        >
          <Button variant={"link"} className="font-bold text-md">Displays</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full p-6 rounded-xl shadow-lg bg-white grid grid-cols-6 gap-4 relative left-12"
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
