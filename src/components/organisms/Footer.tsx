import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-gray-100 py-4 text-center text-gray-600">
			<div className="container mx-auto flex items-center justify-center gap-5">
				<Link href="/polityka-prywatnosci" className="mr-4 hover:text-gray-900">
					Polityka Prywatności
				</Link>
				<Link href="/kontakt" className="hover:text-gray-900">
					Kontakt
				</Link>
			</div>
		</footer>
	);
};
