"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/service/user/signup";



export default function SignupPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const router = useRouter();

  const onSuccess = () => {
    router.push("/login/users");
  };

  const { mutate: signupUser, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupUser({ ...form, type: "publicuser" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <Input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
        <Input type="email" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <Input type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
        <Input type="text" placeholder="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
        <Input type="text" placeholder="Address" name="address" value={form.address} onChange={handleChange} />
        <Button disabled={isPending} type="submit">Signup</Button>
      </form>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}