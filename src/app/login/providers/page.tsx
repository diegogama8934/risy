"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginProvider } from "@/service/providers/login";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Store, ArrowLeft } from "lucide-react";

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/login")}
              className="text-lime-500 hover:text-lime-700 hover:bg-lime-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center justify-center space-x-2 flex-1">
              <div className="p-2 rounded-full bg-lime-100">
                <Store className="w-5 h-5 text-lime-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">Provider Login</CardTitle>
            </div>
            <div className="w-10" /> {/* Spacer for alignment */}
          </div>
          <CardDescription className="text-center">Enter your credentials to access your provider account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Authentication Failed</AlertTitle>
              <AlertDescription>
                {error instanceof Error ? error.message : "Invalid email or password. Please try again."}
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-lime-500 hover:text-lime-700">
                  Forgot password?
                </Link>
              </div>
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
            <Button 
              type="submit" 
              className="w-full bg-lime-500 hover:bg-lime-700" 
              disabled={isPending}
            >
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm">
            Don&apos;t have a provider account?{" "}
            <Link href="/signup" className="text-lime-500 hover:text-lime-700">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}