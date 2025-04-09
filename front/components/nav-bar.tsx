"use client";

import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchBar } from "@/components/search-bar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavBar() {
  const links = [
    {
      name: "الرئيسية",
      path: "/",
      children: [
        { name: "القرآن وعلومه", path: "/lessons/types/10/القرآن-وعلومه", children: [] },
        { name: "الحديث وعلومه", path: "/lessons/types/11/الحديث-وعلومه", children: [] },
        { name: "العقيدة", path: "/lessons/types/12/العقيدة", children: [] },
        { name: "الفقه وأصوله", path: "/lessons/types/13/الفقه-و-أصوله", children: [] },
        { name: "متفرقات", path: "/lessons/types/18/متفرقات", children: [] },
      ],
    },
    { name: "فتاوى", path: "/fatawa", children: [] },
    { name: "خطب", path: "/speeches", children: [] },
    { name: "محاضرات", path: "/lectures", children: [] },
    { name: "كتب", path: "/books", children: [] },
    { name: "فوائد", path: "/benefits", children: [] },
    { name: "مع الشيخ", path: "/with-sheikh", children: [] },
    { name: "تصنيفات", path: "/categories", children: [] },
  ];

  return (
    <nav className="w-full shadow-sm dark:bg-gray-900">
      <div className="flex items-center justify-between w-full gap-8 container mx-auto">
        <div className="ml-auto flex items-center justify-between">
          <Logo />
        </div>
        <SearchBar />
        <div className="flex items-center justify-between gap-4">
          <ProfileMenu />
          <SocialLinks />
        </div>
      </div>

      <div className="flex items-center justify-between w-full pb-1 gap-8 container mx-auto">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-reverse gap-4">
            {links.map((link) => (
              <NavigationMenuItem key={link.path}>
                {link.children.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="text-md font-medium">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1">
                        {link.children.map((child) => (
                          <ListItem
                            key={child.path}
                            title={child.name}
                            href={child.path}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm font-medimd  hover:"
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}