import { ProductCoverImage, type ProductCoverImageType } from "@ui/atoms/ProductCoverImage";
import { ProductDescription, type ProductDescriptionType } from "@ui/atoms/ProductDescription";

export type ProductListItemType = {
	id: number;
	description: ProductDescriptionType;
	coverImage: ProductCoverImageType;
};

export const ProductListItem = ({ description, coverImage }: ProductListItemType) => {
	return (
		<li className="group rounded-md bg-slate-200 p-2 hover:cursor-pointer">
			<ProductCoverImage alt={coverImage.alt} src={coverImage.src} />
			<ProductDescription {...description} />
		</li>
	);
};
