import Link from "next/link";
import { LoginOrUser } from "./client";

export const Navbar = () => {
  return (
    <nav className="h-[60px] px-4 border-b flex items-center justify-between gap-4 bg-primary-foreground dark:bg-primary z-[1000]">
      <Link href="/" className="font-bold uppercase">
        Colouraborator
      </Link>
      <LoginOrUser />
    </nav>
  );
};
