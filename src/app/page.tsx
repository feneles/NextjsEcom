import { ProductsList } from "@ui/organisms/ProductsList";
import { getProducts } from "@/contentful/contentfulApi";

export default async function Home() {
	const products = await getProducts();

	return (
		<section className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductsList products={products} />
		</section>
	);
}
