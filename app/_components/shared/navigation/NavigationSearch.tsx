import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Form from "next/form";
import type { FC } from "react";

const NavigationSearch: FC = () => {
	return (
		<Form action="/search" className="relative w-full flex justify-center items-center">
			<Input
				type="text"
				name="q"
				className="w-full py-4 px-5 pl-14 text-lg bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
				placeholder="Search..."
			/>
			<Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
			<Button
				type="submit"
				className="absolute right-[-0.25rem] top-1/2 -translate-y-1/2 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
			>
				Search
			</Button>
		</Form>
	);
};

export default NavigationSearch;
