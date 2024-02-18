import { Loader } from "@ui/atoms/Loader";
import { ProductsList } from "@ui/organisms/ProductsList";
import { getHomePageProducts } from "@/contentful/contentfulApi";

export const HomePageProducts = async () => {
	const products = await getHomePageProducts();

	if (!products) return <Loader />;

	return (
		<section className="flex  flex-col items-center justify-between p-24">
			<ProductsList products={products} />
		</section>
	);
};
