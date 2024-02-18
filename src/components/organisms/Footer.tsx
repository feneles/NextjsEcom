import { type Route } from "next";
import { ActiveLink } from "@ui/atoms/ActiveLink";

export const Footer = () => {
	return (
		<footer className="bg-gray-100 py-4 text-center text-gray-600">
			<div className="container mx-auto flex items-center justify-center gap-5">
				<ActiveLink
					href={"/polityka-prywatnosci" as Route}
					className="mr-4 hover:text-gray-900"
					activeClassName="text-black underline"
					text="Polityka Prywatności"
				/>
				<ActiveLink
					href={"/kontakt" as Route}
					className="hover:text-gray-900"
					text="Kontakt"
					activeClassName="text-black underline"
				/>
			</div>
		</footer>
	);
};
