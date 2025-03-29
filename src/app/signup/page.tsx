import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Registrarse</h1>
        <Link href="/signup/users" className="p-4  w-96 text-center rounded-md bg-lime-500 text-white">Consumiré productos</Link>
        <Link href="/signup/providers" className="p-4  w-96 text-center rounded-md bg-lime-500 text-white">Soy un proveedor</Link>
      </div>
    </div>
  );
}