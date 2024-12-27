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
import Image from "next/image";

const names = [
  "Discover Mobile", "Galaxy Ai", "Galaxy Smartphone", "Galaxy Tab", "Galaxy Watch",
  "Galaxy Buds", "Galaxy Ring", "Galaxy Accessories", "How to Switch", "Why Galaxy",
  "Switch to Galaxy", "Certified Re-Newed", "Apps & Services", "Mobile Buying Guide", "Shop All Mobile"
];

const images = [
  { title: "Galaxy Z Fold6", img: "Fold6.png", url: "#" },
  { title: "Galaxy Z Flip6", img: "Flip.png", url: "#" },
  { title: "Galaxy S24 Ultra", img: "s24-Ultra.png", url: "#" },
  { title: "Galaxy Watch Ultra", img: "UltraWatch.png", url: "#" },
  { title: "Galaxy Buds3 Pro", img: "GalaxyBud3.png", url: "#" },
  { title: "Galaxy S24 FE", img: "Fold6.png", url: "#" },
  { title: "Galaxy Tab S10 Series", img: "s10-ultra.png", url: "#" },
  { title: "Galaxy Buds 3", img: "GalaxyBud3.png", url: "#" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button variant="link" className="font-bold text-md">Mobile</Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=" w-full p-6 rounded-xl shadow-lg bg-white flex gap-8 relative left-24"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuGroup>
          <div className="flex flex-col space-y-2 border-r">
            {names.map((name, index) => (
              <DropdownMenuItem
                key={index}
                className="text-md hover:font-bold hover:text-primary cursor-pointer"
              >
                {name}
              </DropdownMenuItem>
            ))}
          </div>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <div className="text-lg font-bold pb-2 mb-4">New & Featured</div>
          <div className="grid grid-cols-3 gap-8">
            {images.map((image, index) => (
                <div className="w-48 bg-neutral-100 rounded-xl">
                    <a href={image.url} key={index} className="block text-center">
                <Image
                  src={`/assets/images/Mobile/${image.img}`}
                  alt={image.title}
                  width={360}
                  height={240}
                  className="w-48"
                  />
                <span className="text-md block">{image.title}</span>
              </a>
                </div>
            ))}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
