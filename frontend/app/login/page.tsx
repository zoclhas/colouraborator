import { LoginForm } from "./form";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Login | Colouraborator",
  description: "Login",
};

export default function Login({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  const message = searchParams.message;

  return (
    <main className="min-h-[calc(100vh-80px)] px-4 flex items-center justify-center">
      <div className="flex flex-col gap-2">
        {message && (
          <Alert className="sm:min-w-[370px] mb-2">
            <AlertCircle />
            <AlertTitle>Uh Oh!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Card className="sm:min-w-[370px]">
          <LoginForm />
        </Card>

        <Card>
          <CardContent className="flex justify-between gap-2 pb-0 p-2">
            <Link href="/login/forgot" className="underline">
              Forgot Password?
            </Link>
            <Link href="/register" className="underline">
              Register
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
