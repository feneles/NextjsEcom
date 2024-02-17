import { ProductCarousel } from "@/components/molecules/ProductCarousel";
import { ProductImages } from "@/components/atoms/ProductCurrentImage";
import { getProductBySlug } from "@/contentful/contentfulApi";
import { Loader } from "@/components/atoms/Loader";
import { priceFormat } from "@/utils";

export default async function ProductPage({ params: { slug } }: { params: { slug: string } }) {
	const product = await getProductBySlug(slug);

	if (!product) {
		return <Loader />;
	}

	return (
		<div className="mx-auto my-10 flex max-w-4xl flex-col p-6">
			<div className="mr-6 flex  gap-6 ">
				<div className="relative h-64 w-64">
					<ProductImages images={product.imagesCollection.items} />
				</div>
				<div className="flex w-full flex-col gap-4">
					<div>
						<h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
						<p className="mb-4 text-gray-700">{product.description}</p>
						<p className="text-right text-lg font-semibold">{priceFormat(product.price)}</p>
					</div>
					<button className="ml-auto mt-auto w-56 rounded bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-500">
						Dodaj do koszyka
					</button>
				</div>
			</div>

			<ProductCarousel images={product.imagesCollection.items} />
		</div>
	);
}
