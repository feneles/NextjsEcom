import { type Route } from "next";
import { ActiveLink } from "@ui/atoms/ActiveLink";

const staticLinks = [
	{
		text: "polityka prywatności",
		href: "/polityka-prywatnosci",
	},
	{
		text: "kontakt",
		href: "/kontakt",
	},
	{
		text: "o nas",
		href: "/o-nas",
	},
];

export const Footer = () => {
	return (
		<footer className="bg-gray-100 py-4 text-center text-gray-600">
			<div className="container mx-auto flex items-center justify-center gap-5">
				{staticLinks.map((link) => (
					<ActiveLink
						key={link.href}
						href={link.href as Route}
						className="hover:text-gray-900"
						text={link.text}
						activeClassName="text-black underline"
					/>
				))}
			</div>
		</footer>
	);
};
