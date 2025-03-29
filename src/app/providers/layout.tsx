"use client";


import { Building, HelpCircle } from "lucide-react";

import { Home, Package } from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";



export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col max-h-screen">
      <header className="px-4 md:px-12 py-4 border-b flex justify-between items-center sticky top-0 z-50 bg-background">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link href="/users/home">
            <h1 className="text-2xl font-bold">Risy</h1>
          </Link>
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
          fixed md:static inset-y-0 left-0 z-40
          flex flex-col justify-between items-center px-2 pt-4 border-r
          bg-background transition-transform duration-200 ease-in-out md:sidebar
          w-16 md:w-16
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <nav className="flex flex-col gap-4 w-full">
            <Link href="/providers/home" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <Home />
            </Link>
            <Link href="/providers/post" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <Package />
            </Link>
          </nav>

          <Link href="/help" className="p-4 rounded-md hover:bg-neutral-100 w-full">
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
