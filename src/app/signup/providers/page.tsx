'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signupProvider } from "@/service/providers/signup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Store, ArrowLeft } from "lucide-react";

const PROVIDER_TYPE = "organization" as const;

export default function SignupProvidersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    type: PROVIDER_TYPE,
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
    signupProviderFn(form);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/signup")}
              className="text-lime-500 hover:text-lime-700 hover:bg-lime-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center justify-center space-x-2 flex-1">
              <div className="p-2 rounded-full bg-lime-100">
                <Store className="w-5 h-5 text-lime-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Provider Registration</CardTitle>
            </div>
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
          <CardDescription className="text-center">Create your provider account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Registration Failed</AlertTitle>
              <AlertDescription>
                {error instanceof Error ? error.message : "Failed to create account. Please try again."}
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Organization Name</Label>
              <Input
                id="name"
                placeholder="Company Name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="contact@organization.com"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="+1 (555) 000-0000"
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Input
                id="address"
                placeholder="123 Business St, City, Country"
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-lime-500 hover:bg-lime-700" 
              disabled={isPending}
            >
              {isPending ? "Creating Account..." : "Register Provider"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm">
            Already have a provider account?{" "}
            <Link href="/login" className="text-lime-500 hover:text-lime-700">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
