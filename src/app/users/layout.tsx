"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, User, Settings, Home, Package, Building, HelpCircle, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col max-h-screen">
      <header className="px-4 md:px-12 py-4 border-b flex justify-between items-center sticky top-0 z-20 bg-background">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Risy</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <User />
              Diego Martínez García
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Configuración
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <LogOut className="text-red-600" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-1">
        <aside className={`
          fixed md:static inset-y-0 left-0 z-10
          flex flex-col justify-between items-center px-2 pt-4 border-r
          bg-background transition-transform duration-200 ease-in-out md:sidebar
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <nav className="flex flex-col gap-4 items-center">
            <Link href="/users/home" className="p-4 rounded-md hover:bg-neutral-100">
              <Home />
            </Link>
            <Link href="/users/post" className="p-4 rounded-md hover:bg-neutral-100">
              <Package />
            </Link>
            <Link href="/users/organizations" className="p-4 rounded-md hover:bg-neutral-100">
              <Building />
            </Link>
          </nav>

          <Link href="/help" className="p-4 rounded-md hover:bg-neutral-100">
            <HelpCircle />
          </Link>
        </aside>
        <div className="w-full p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}