"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { headers } from "@/lib/headers";
import { Error, UserLogin } from "@/payload-types";
import { redirect } from "next/navigation";
import { getUser, setUser } from "@/lib/user-info";

export function LoginForm() {
  const currUser = getUser();
  if (currUser) {
    redirect("/");
  }

  const loginHandler = async (formData: FormData) => {
    const email = formData.get("email")!;
    const password = formData.get("password")!;

    const res = await fetch(process.env.NEXT_PUBLIC_API + "/api/users/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const data: Error = await res.json();
      const error = data.errors[0].message.split(" ").join("+");
      redirect("/login?message=" + error);
    }

    const data: UserLogin = await res.json();
    setUser(data);
    location.reload();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        loginHandler(new FormData(e.currentTarget));
      }}
    >
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login using your email and password</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              required
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
    </form>
  );
}
