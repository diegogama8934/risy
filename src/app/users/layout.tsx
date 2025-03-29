import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, User, Settings, Home, Package, Building, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-h-screen">
      <header className="px-12 py-4 border-b flex justify-between items-center sticky top-0 z-10 topbar">
        <h1 className="text-2xl font-bold">Risy</h1>
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
        <aside className="flex flex-col justify-between items-center px-2 pt-4 border-r sticky top-[69] sidebar">
          <nav className="flex flex-col gap-4 items-center">
            <Link href="/users/home" className="p-4 rounded-md hover:bg-neutral-100">
              <Home />
            </Link>
            <Link href="/food" className="p-4 rounded-md hover:bg-neutral-100">
              <Package />
            </Link>
            <Link href="/organizations" className="p-4 rounded-md hover:bg-neutral-100">
              <Building />
            </Link>
          </nav>

          <Link href="/help" className="p-4 rounded-md hover:bg-neutral-100">
            <HelpCircle />
          </Link>
        </aside>
        <div className="w-full p-8">
          {children}
        </div>
      </div>
    </div>
  );
}