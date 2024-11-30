import Link from "next/link";
import type { FC } from "react";
import NavigationLogo from "./NavigationLogo";

const Navigation: FC = () => {
	return (
		<section className="border-b">
			<div className="flex flex-col lg:flex-row items-center gap-4 p-4">
				<div className="flex items-center justify-between w-full lg:w-auto">
					<Link href={"/"} className="font-bold shrink-0">
						<NavigationLogo />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Navigation;
