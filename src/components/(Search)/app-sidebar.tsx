import * as React from "react";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "TYPE",
      url: "#",
      items: [
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Accessories",
          url: "#",
        },
      ],
    },
    {
      title: "CATEGORY",
      url: "#",
      items: [
        {
          title: "MOBILE",
          url: "#",
        },
        {
          title: "TELEVISIONS & HOME THEATERS",
          url: "#",
        },
        {
          title: "COMPUTING",
          url: "#",
        },
        {
          title: "HOME APPLLIANCES",
          url: "#",
        },
        {
          title: "DISPLAYS",
          url: "#",
        },
      ],
    },
    {
      title: "PRICE",
      url: "#",
      items: [
        {
          title: "OVER $1000",
          url: "#",
        },
        {
          title: "$100 - $300",
          url: "#",
        },
        {
          title: "$300 - $500",
          url: "#",
        },
        {
          title: "$500 - $900",
          url: "#",
        },
        {
          title: "UNDER $100",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="w-[360px]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">FILTERS</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={true}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="font-bold">
                      {item.title} {" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <div key={subItem.title} className="flex items-center py-2">
                            <input
                              type="checkbox"
                              id={subItem.title}
                              className="mr-2"
                            />
                            <label htmlFor={subItem.title} className="text-sm">
                              {subItem.title}
                            </label>
                          </div>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
