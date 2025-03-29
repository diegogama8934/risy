"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>
        <Link href="/login/users" className="p-4  w-96 text-center rounded-md bg-lime-500 text-white">Consumiré productos</Link>
        <Link href="/login/providers" className="p-4  w-96 text-center rounded-md bg-lime-500 text-white">Soy un proveedor</Link>
      </div>
    </div>
  );
}