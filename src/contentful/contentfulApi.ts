import { gql, GraphQLClient } from "graphql-request";
import { type Product, type ProductCollection } from "@/contentful/contentfulApi.types";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	},
});

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
	return data.productCollection.items[0] || null;
};
