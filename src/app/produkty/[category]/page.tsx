import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsByCategory } from "@/contentful/contentfulApi";

export default async function CategoryPage({
	params: { category },
}: {
	params: { category: string };
}) {
	const products = await getProductsByCategory(category);
	return (
		<section className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductsList products={products} />
		</section>
	);
}
