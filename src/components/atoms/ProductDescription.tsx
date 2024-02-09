import { priceFormat } from "@/utils";

export type ProductDescriptionType = {
	name: string;
	category: string;
	price: number;
};

export const ProductDescription = ({ category, name, price }: ProductDescriptionType) => {
	return (
		<div className="flex flex-col gap-2 pt-2 text-xs">
			<header className="flex justify-between">
				<h3>{name}</h3>
				<p>{priceFormat(price / 100)}</p>
			</header>
			<p className="text-gray-500">{category}</p>
		</div>
	);
};
