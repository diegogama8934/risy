"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signup } from "@/service/user/signup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ShoppingCart, ArrowLeft } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type UserType = "publicuser" | "organization";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    type: "publicuser" as UserType,
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
    signupUser(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    setForm({ ...form, type: value as UserType });
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
                <ShoppingCart className="w-5 h-5 text-lime-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Consumer Registration</CardTitle>
            </div>
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
          <CardDescription className="text-center">Create your consumer account</CardDescription>
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
              <Label>Account Type</Label>
              <Select value={form.type} onValueChange={handleTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="publicuser">Public User</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">{form.type === "organization" ? "Organization Name" : "Full Name"}</Label>
              <Input
                id="name"
                placeholder={form.type === "organization" ? "Company Name" : "John Doe"}
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
                placeholder={form.type === "organization" ? "contact@organization.com" : "name@example.com"}
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
              <Label htmlFor="address">{form.type === "organization" ? "Business Address" : "Address"}</Label>
              <Input
                id="address"
                placeholder={form.type === "organization" ? "123 Business St, City, Country" : "123 Main St, City, Country"}
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
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-lime-500 hover:text-lime-700">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}