import Link from "next/link";
import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationLogo from "./NavigationLogo";
import NavigationSearch from "./NavigationSearch";

const Navigation: FC = () => {
  return (
    <section className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} className="flex items-center gap-2 font-bold shrink-0">
            <NavigationLogo />
            <span className="text-2xl prose-h2: font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Hangooout
            </span>
          </Link>

          <div className="lg:hidden">
            {/* TODO: Clerk button */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="w-full lg:max-w-2xl">
            <NavigationSearch />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
