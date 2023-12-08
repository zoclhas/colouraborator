import { LoginForm } from "./form";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Login | Colouraborator",
  description: "Login",
};

export default function Login({
  searchParams,
}: {
  searchParams: { message?: string; success?: string };
}) {
  const message = searchParams.message;
  const success = searchParams.success;

  return (
    <main className="min-h-[calc(100vh-60px)] px-4 flex items-center justify-center">
      <div className="flex flex-col gap-2">
        {message && (
          <Alert className="sm:min-w-[370px] mb-2">
            {success === "true" ? <CheckCircle2 /> : <AlertCircle />}
            <AlertTitle>{success === "true" ? "Ta-da!" : "Uh Oh!"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Card className="sm:min-w-[370px]">
          <LoginForm />
        </Card>

        <Card>
          <CardContent className="flex justify-between gap-2 pb-0 p-2 text-sm">
            <Link href="/login/forgot" className="underline">
              Forgot Password?
            </Link>
            <span>
              New Here?&nbsp;
              <Link href="/register" className="underline">
                Register
              </Link>
            </span>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
