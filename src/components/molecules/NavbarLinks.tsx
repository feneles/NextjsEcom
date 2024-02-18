"use client";
import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { getCategories } from "@/contentful/contentfulApi";

const staticLinks = [
	{
		text: "strona główna",
		href: "/",
	},
	{
		text: "produkty",
		href: "/produkty",
	},
	{
		text: "o nas",
		href: "/o-nas",
	},
];

export const NavbarLinks = async () => {
	const categories = await getCategories();
	return (
		<div className="mx-auto flex items-center space-x-4">
			{staticLinks.map((link) => (
				<ActiveLink
					key={link.href}
					href={link.href as Route}
					className="text-gray-600 hover:text-gray-900"
					activeClassName="text-black underline"
					text={link.text}
				/>
			))}
			{categories.map((category) => (
				<ActiveLink
					key={category}
					href={`/produkty/${category}` as Route}
					className="text-gray-600 hover:text-gray-900"
					activeClassName="text-black underline"
					text={category}
				/>
			))}
		</div>
	);
};
