import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ShoppingCart } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome to Risy</CardTitle>
          <CardDescription className="text-center">Select your role to register</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Link 
            href="/signup/users" 
            className="group p-6 text-center rounded-lg bg-white hover:bg-lime-50 border-2 border-lime-200 hover:border-lime-500 transition-all duration-200 w-full"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-lime-100 group-hover:bg-lime-200 transition-colors">
                <ShoppingCart className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Consumer</h3>
                <p className="text-sm text-gray-500">I will consume products</p>
              </div>
            </div>
          </Link>
          <Link 
            href="/signup/providers" 
            className="group p-6 text-center rounded-lg bg-white hover:bg-lime-50 border-2 border-lime-200 hover:border-lime-500 transition-all duration-200 w-full"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-lime-100 group-hover:bg-lime-200 transition-colors">
                <Store className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Provider</h3>
                <p className="text-sm text-gray-500">I am a provider</p>
              </div>
            </div>
          </Link>
          <div className="text-center text-sm pt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-lime-500 hover:text-lime-700">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}