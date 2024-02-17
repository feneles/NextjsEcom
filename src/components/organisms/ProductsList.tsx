import { ProductListItem, type ProductListItemType } from "@ui/molecules/ProductListItem";

type ProductsListType = {
	products: ProductListItemType[];
};

export const ProductsList = ({ products }: ProductsListType) => {
	return (
		<ul className="flex flex-wrap gap-4" data-testid="products-list">
			{products.map((product) => (
				<ProductListItem key={product.slug} {...product} />
			))}
		</ul>
	);
};
