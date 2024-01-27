import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/logo.svg"}
        width={30}
        height={30}
        alt="NoteBird Logo"
        className="dark:invert"
      />
      <p className={cn("font-bold", font.className)}>NoteBird</p>
    </div>
  );
};

export default Logo;
