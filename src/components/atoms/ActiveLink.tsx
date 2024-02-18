"use client";
import { type Route } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ActiveLinkProps {
	text: string;
	href: Route;
	activeClassName: string;
	className: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
	text,
	href,
	className,
	activeClassName,
}) => {
	const pathname = usePathname();

	const isActive = pathname === href;

	const linkClassName = isActive ? activeClassName : className;

	return (
		<Link href={href} className={`${linkClassName} transition duration-300 ease-in-out`}>
			{text}
		</Link>
	);
};
