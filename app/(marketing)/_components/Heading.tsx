"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-prettier">
        Your Ideas, Documents, & Plans. Unified. <br />
        Welcome to <span className="underline">NoteBird</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-balance">
        NoteBird is the connected workspace where better, fast work happens.
      </h3>
      <Button size="lg">
        Join NoteBird
        <ArrowRight className="ml-2 h-4 w-4" size={24} />
      </Button>
    </div>
  );
};

export default Heading;
