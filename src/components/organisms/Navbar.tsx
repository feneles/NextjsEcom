import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="bg-gray-100">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<div className="mx-auto flex items-center space-x-4">
					<Link href="/" className="text-gray-600 hover:text-gray-900">
						Strona główna
					</Link>
					<Link href="/" className="text-gray-600 hover:text-gray-900">
						Produkty
					</Link>
					<Link href="/o-nas" className="text-gray-600 hover:text-gray-900">
						O nas
					</Link>
				</div>
				<div className="flex items-center">
					<button className="text-gray-600 hover:text-gray-900 focus:outline-none">Koszyk </button>
				</div>
			</div>
		</nav>
	);
};
