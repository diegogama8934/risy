'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signupProvider } from "@/service/providers/signup";

export default function SignupProvidersPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const router = useRouter();

  const onSuccess = () => {
    router.push("/login/providers");
  };

  const { mutate: signupProviderFn, isPending, error } = useMutation({
    mutationFn: signupProvider,
    onSuccess,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupProviderFn({ ...form, type: "organization" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Signup Providers</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
        <Input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
        <Button disabled={isPending} type="submit">Signup</Button>
      </form>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}
