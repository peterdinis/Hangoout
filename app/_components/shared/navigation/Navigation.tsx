import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import type { FC } from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationSearch from "./NavigationSearch";
import DarkModeButton from "../DarkModeButton";

const Navigation: FC = () => {
	return (
		<section className="border-b">
			<div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4">
				{/* Logo Section */}
				<div className="flex items-center justify-between w-full lg:w-auto">
					<Link
						href="/"
						className="flex items-center gap-2 font-bold shrink-0"
					>
						<NavigationLogo />
						<span className="text-2xl prose-h2: font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
							Hangooout
						</span>
					</Link>

					{/* Clerk Buttons for Mobile */}
					<div className="lg:hidden flex items-center gap-4">
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</div>

				{/* Search Section */}
				<div className="w-full flex justify-center items-center lg:max-w-2xl">
					<NavigationSearch />
				</div>

				{/* Clerk and Dark Mode Buttons */}
				<div className="hidden lg:flex items-center gap-4 ml-auto">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<DarkModeButton />
				</div>
			</div>
		</section>
	);
};

export default Navigation;
