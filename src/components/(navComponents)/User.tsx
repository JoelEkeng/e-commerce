'use client'

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import Link from 'next/link';

export function UserNav() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div
          onClick={() => setOpen(true)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
            <FaRegUser />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 h-48 pt-8 rounded-xl relative right-12"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuGroup>
        <DropdownMenuItem className="text-lg font-bold">
            <Link href="/admin">Admin</Link>
            <RiAdminLine/>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem className="text-md hover:font-bold hover:text-lg">
            <Link href="/register">Create an account</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-md hover:font-bold hover:text-lg">
            <Link href="/login">Sign in</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="text-md hover:font-bold hover:text-lg">
            Track your orders
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
