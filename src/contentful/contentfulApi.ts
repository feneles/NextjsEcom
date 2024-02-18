import { gql, GraphQLClient } from "graphql-request";
import { type Product, type ProductCollection } from "@/contentful/contentfulApi.types";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
		"Content-Type": "application/json",
	},
});

// Get all products

const getProductsQuery = gql`
	query {
		productCollection {
			items {
				name
				slug
				coverImage {
					url
					title
				}
				price
				category
			}
		}
	}
`;

export const getProducts = async (): Promise<Product[]> => {
	const data = await graphQLClient.request<{ productCollection: ProductCollection }>(
		getProductsQuery,
	);
	return data.productCollection.items;
};

// Get product by slug

const getProductBySlugQuery = gql`
	query GetProductBySlug($slug: String!) {
		productCollection(where: { slug: $slug }, limit: 1) {
			items {
				name
				slug
				coverImage {
					url
					title
				}
				imagesCollection {
					items {
						title
						url
					}
				}
				description
				price
				category
				quantity
			}
		}
	}
`;

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
	const data = await graphQLClient.request<{ productCollection: { items: Product[] } }>(
		getProductBySlugQuery,
		{ slug },
	);
	return data.productCollection.items[0];
};

// Get products by category

const getProductsByCategoryQuery = gql`
	query GetProductsByCategory($category: String!) {
		productCollection(where: { category: $category }) {
			items {
				name
				slug
				coverImage {
					url
					title
				}
				price
				category
			}
		}
	}
`;

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
	const data = await graphQLClient.request<{ productCollection: ProductCollection }>(
		getProductsByCategoryQuery,
		{ category },
	);
	return data.productCollection.items;
};

// Get home page products

const getHomePageProductsQuery = gql`
	query {
		productCollection(limit: 3) {
			items {
				name
				slug
				coverImage {
					url
					title
				}
				price
				category
			}
		}
	}
`;

export const getHomePageProducts = async (): Promise<Product[]> => {
	const data = await graphQLClient.request<{ productCollection: ProductCollection }>(
		getHomePageProductsQuery,
	);
	return data.productCollection.items;
};
