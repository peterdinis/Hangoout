import Link from "next/link";
import type { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationText from "./NavigationText";
import NavigationLogo from "./NavigationLogo";

const Navigation: FC = () => {
  return (
    <section className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} className="font-bold shrink-0">
            <NavigationLogo />
            <NavigationText />
          </Link>

          <div className="lg:hidden">
            {/* TODO: Clerk button */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
