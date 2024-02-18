import { NavbarLinks } from "@/components/molecules/NavbarLinks";

export const Navbar = () => {
	return (
		<nav className="bg-gray-100">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<NavbarLinks />
				<div className="flex items-center">
					<button className="text-gray-600 hover:text-gray-900 focus:outline-none">Koszyk </button>
				</div>
			</div>
		</nav>
	);
};
