"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, User, Settings, Home, Package, HelpCircle, Menu, ChevronDown, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function UserLayout({ children }: { children: React.ReactNode }) {
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
            <Button 
              variant="ghost" 
              className="flex items-center gap-3 px-3 py-2 hover:bg-accent/50 transition-colors"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <Badge 
                  variant="success" 
                  className="absolute -bottom-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px]"
                >
                  P
                </Badge>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Diego Martínez García</span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="success" className="text-[10px] px-1.5 py-0">Proveedor</Badge>
                  <ChevronDown className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center gap-2 p-2 border-b">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Diego Martínez García</span>
                <span className="text-xs text-muted-foreground">diego@example.com</span>
              </div>
            </div>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Configuración
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 focus:text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
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
            <Link href="/users/home" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <Home />
            </Link>
            <Link href="/users/post" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <Package />
            </Link>
            <Link href="/users/orders" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Link href="/users/profile" className="p-4 rounded-md hover:bg-neutral-100 w-full">
              <User className="w-5 h-5" />
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