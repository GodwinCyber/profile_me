"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b">
      <Link href="/">
        <div className="font-bold text-xl hover:text-primary transition-colors">Godwin</div>
      </Link>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button 
              variant={pathname === item.path ? "default" : "ghost"}
            >
              {item.name}
            </Button>
          </Link>
        ))}
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;