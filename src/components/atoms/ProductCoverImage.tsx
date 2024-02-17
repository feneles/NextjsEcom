import Image from "next/image";

export type ProductCoverImageType = {
	url: string;
	title: string;
};

export const ProductCoverImage = ({ url, title }: ProductCoverImageType) => {
	return (
		<div className="relative h-72 w-64 overflow-hidden">
			<Image
				className=" transition-transform group-hover:scale-105"
				src={url}
				alt={title}
				objectFit="cover"
				layout="fill"
			/>
		</div>
	);
};
