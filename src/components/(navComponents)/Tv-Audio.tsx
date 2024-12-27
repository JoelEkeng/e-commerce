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
  { name: "Offers & Deals", items: ["TV & Audio offers"] },
  { name: "TVS", items: ["Discover TVs", "Samsung Exclusive", "TV & Soundbar Bundles"] },
  { name: "TVs by Size", items: ["98+ inch Tvs", "85+ inch Tvs", "75+ inch Tvs", "Sprint Offers", "65+ inch Tvs", "55+ inch Tvs", "43+ inch Tvs", "32 inch Tvs", "Shop All TVs"] },
  { name: "Home Audio", items: ["Discover Home Audio", "Music Frame WICKED Edition", "Music Frame", "Q Series Premium Soundbars", "Ultra Slim Soundbars", "Soundbars with Subwoofer", "All-in-One Soundbars", "JBL Audio", "Shop All Audio"] },
  { name: "Micro LED", items: ["Discover MICRO LED", "The Premiere", "Shop All Projectors"] },
  { name: "TVs by Resolution", items: ["4k Tvs", "8k Tvs"] },
  { name: "Projectors", items: ["The Freestyle 2nd Gen", "The Premiere", "Shop All Projectors"] },  
  { name: "Accessories", items: ["TV Accessories", "Home Audio Accesories"] },
];

export function TVAudioNav() {
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
            TV & Audio
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[760px] p-6 rounded-xl shadow-lg bg-white grid grid-cols-6 gap-4 relative left-12"
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
