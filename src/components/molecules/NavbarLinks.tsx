"use client";
import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const links = [
	{
		text: "Strona główna",
		href: "/",
	},
	{
		text: "Produkty",
		href: "/produkty",
	},
	{
		text: "O nas",
		href: "/o-nas",
	},
];

export const NavbarLinks = () => {
	return (
		<div className="mx-auto flex items-center space-x-4">
			{links.map((link) => (
				<ActiveLink
					key={link.href}
					href={link.href as Route}
					className="text-gray-600 hover:text-gray-900"
					activeClassName="text-black underline"
					text={link.text}
				/>
			))}
		</div>
	);
};
