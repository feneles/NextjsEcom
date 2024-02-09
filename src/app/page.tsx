import { ProductsList } from "@/components/organisms/ProductsList";
import { productsMock } from "@/dataMock";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductsList products={productsMock} />
		</main>
	);
}
