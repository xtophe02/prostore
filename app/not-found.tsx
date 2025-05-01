"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Image src={logo} alt="Not Found" width={100} height={100} priority />
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-destructive">
        The page you are looking for does not exist.
      </p>
      <Button variant="outline" onClick={() => (window.location.href = "/")}>
        Back to Home
      </Button>
    </div>
  );
}
