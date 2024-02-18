import Link from "next/link";
import { type Route } from "next";
import { ProductCoverImage, type ProductCoverImageType } from "@ui/atoms/ProductCoverImage";
import { ProductDescription, type ProductDescriptionType } from "@ui/atoms/ProductDescription";

export type ProductListItemType = {
	slug: string;
	coverImage: ProductCoverImageType;
} & ProductDescriptionType;

export const ProductListItem = (props: ProductListItemType) => {
	const { coverImage, slug } = props;
	return (
		<Link href={`produkt/${slug}` as Route}>
			<li className="group rounded-md bg-slate-200 p-2 hover:cursor-pointer">
				<ProductCoverImage title={coverImage.title} url={coverImage.url} />
				<ProductDescription {...props} />
			</li>
		</Link>
	);
};
