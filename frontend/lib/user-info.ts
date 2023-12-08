"use client";

import { deleteCookie, getCookie, setCookie } from "cookies-next";
import type { UserLogin } from "@/payload-types";

export function setUser(userData: UserLogin) {
  if (userData) {
    setCookie("user", JSON.stringify(userData), {
      maxAge: 30 * 24 * 60 * 60,
    });
  }
}

export function getUser() {
  const user = getCookie("user");
  return user ?? undefined;
}

export function removeUser() {
  deleteCookie("user");
}
