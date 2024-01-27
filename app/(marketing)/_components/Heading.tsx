"use client";

import { Spinner } from "@/components/SpinIcon";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-prettier">
        Your Ideas, Documents, & Plans. Unified. <br />
        Welcome to <span className="underline">NoteBird</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-balance">
        NoteBird is the connected workspace where better, fast work happens.
      </h3>
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">Join NoteBird</Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="lg">
            Get NoteBird Free
            <ArrowRight className="ml-2 h-4 w-4" size={24} />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
