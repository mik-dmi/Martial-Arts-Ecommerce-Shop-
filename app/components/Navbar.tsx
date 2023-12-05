"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/Products" },
  { name: "About Us", href: "/About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const {cartCount} = useShoppingCart()

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl text-2xl font-bold">
            Martial <span className="text-primary">Gear</span>
          </h1>
        </Link>
        <nav className="hidden gap-11 lg:flex 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <Link className="text-lg font-semibold text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Link href="/cart">
            <Button variant={"outline"} className = "flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
              <ShoppingBag />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Card</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
