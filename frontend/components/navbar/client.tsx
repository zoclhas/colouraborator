"use client";

import { getUser, removeUser } from "@/lib/user-info";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserLogin } from "@/payload-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserCircle } from "lucide-react";

export const LoginOrUser = () => {
  const [mounted, setMounted] = useState(false);
  const user = getUser();

  useEffect(() => setMounted(true), []);

  if (mounted) {
    if (!user) {
      return <LoginButtons />;
    }

    const userData: UserLogin = JSON.parse(user);
    return <UserProfie user={userData} />;
  }
};

const LoginButtons = () => (
  <ul className="flex items-center gap-2">
    <li>
      <Button asChild variant="outline">
        <Link href="/register">Sign Up</Link>
      </Button>
    </li>
    <li>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </li>
  </ul>
);

const UserProfie = ({ user }: { user: UserLogin }) => {
  const logoutHandler = () => {
    removeUser();
    location.reload();
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <UserCircle />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/palettes">My Palettes</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer text-red-500">
            <DialogTrigger className="w-full">Logout</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="destructive" onClick={logoutHandler}>
              Logout
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
