import { priceFormat } from "@/utils";

export type ProductDescriptionType = {
	name: string;
	category: string;
	price: number;
};

export const ProductDescription = ({ category, name, price }: ProductDescriptionType) => {
	return (
		<div className="flex flex-col gap-2 pt-2 text-xs">
			<div className="flex justify-between">
				<h6>{name}</h6>
				<h6>{priceFormat(price / 100)}</h6>
			</div>
			<p className="text-gray-500">{category}</p>
		</div>
	);
};
