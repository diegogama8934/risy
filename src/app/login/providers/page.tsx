"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginProvider } from "@/service/providers/login";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onSuccess = () => {
    router.push("/providers/home");
  };


  const { mutate: loginProviderFn, isPending, error } = useMutation({
    mutationFn: loginProvider,
    onSuccess,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginProviderFn({ ...form });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <Input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
        <Button disabled={isPending} type="submit">Login</Button>
      </form>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}