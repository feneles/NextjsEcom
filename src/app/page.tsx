import { HomePageProducts } from "@/components/molecules/HomePageProducts";

export default async function Home() {
	return (
		<section className="flex min-h-full flex-col items-center p-24">
			<h1 className="text-3xl font-bold">Strona startowa</h1>
			<p className="py-14">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique ullam, ex nesciunt
				accusantium neque earum officiis ducimus corporis aut laboriosam ipsam quo alias recusandae
				vero fugit odio, facere id?
			</p>
			<HomePageProducts />
			<p className="py-14">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique ullam, ex nesciunt
				accusantium neque earum officiis ducimus corporis aut laboriosam ipsam quo alias recusandae
				vero fugit odio, facere id?
			</p>
		</section>
	);
}
