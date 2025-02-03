"use client";
import { SessionProvider } from "@node_modules/next-auth/react";
export default function Provider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
