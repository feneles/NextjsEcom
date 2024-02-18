import { priceFormat } from "@/utils";

export type ProductDescriptionType = {
	name: string;
	price: number;
};

export const ProductDescription = ({ name, price }: ProductDescriptionType) => {
	return (
		<div className="flex flex-col gap-2 pt-2 text-xs">
			<div className="flex justify-between">
				<h3>{name}</h3>
				<p>{priceFormat(price)}</p>
			</div>
		</div>
	);
};
