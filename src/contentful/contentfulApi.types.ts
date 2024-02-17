export type CoverImage = {
	url: string;
	title: string;
};

export type Product = {
	name: string;
	slug: string;
	coverImage: CoverImage;
	imagesCollection: {
		items: CoverImage[];
	};
	description: string;
	price: number;
	category: string;
};

export type ProductCollection = {
	items: Product[];
};
