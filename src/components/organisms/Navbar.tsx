import { NavbarLinks } from "@/components/molecules/NavbarLinks";

export const Navbar = () => {
	return (
		<nav className="bg-gray-100">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<NavbarLinks />
				<div className="flex items-center">
					<button className="text-gray-600 hover:text-gray-900 focus:outline-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="8" cy="21" r="1" />
							<circle cx="19" cy="21" r="1" />
							<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};
