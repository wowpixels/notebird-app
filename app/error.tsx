"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        width={300}
        height={300}
        alt="Error"
        className="invert-0 dark:invert"
      />
      <h2 className="text-lg font-medium">Oh no, we have an error!</h2>
      <Link href="/documents">
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
};

export default Error;
