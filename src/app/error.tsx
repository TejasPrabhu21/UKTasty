"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  statusCode: number;
  errorMessage: string;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  reset,
  statusCode,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">{statusCode}</h1>
        <AlertTriangle className="mt-6 w-24 h-24 mx-auto opacity-30" />
        <h2 className="mt-4 text-2xl font-semibold">
          Oops! Something Went Wrong
        </h2>
        <p className="mt-2 text-lg">{errorMessage}</p>
        <div className="flex gap-3 justify-center items-center mt-5">
          <Link href="/admin">
            <Button>Go Back Home</Button>
          </Link>

          <Button variant={"outline"} onClick={reset}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
