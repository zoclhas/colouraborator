import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | Colouraborator",
  description: "Login",
};

import { LoginPage } from ".";
export default function Login({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  return <LoginPage searchParams={searchParams} />;
}
