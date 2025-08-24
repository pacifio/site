"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DefaultFAB } from "@/components/ui/floating-action-button";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl md:text-8xl font-bold">404</h1>
      <Link href={"/"}>
        <Button
          variant="outline"
          className="rounded-full my-8 px-6 cursor-pointer"
        >
          Page not found, Go back!
        </Button>
      </Link>

      <DefaultFAB />
    </div>
  );
}
