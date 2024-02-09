import Image from "next/image";

export type ProductCoverImageType = {
	src: string;
	alt: string;
};

export const ProductCoverImage = ({ src, alt }: ProductCoverImageType) => {
	return (
		<div className="relative h-72 w-64 overflow-hidden">
			<Image
				className=" transition-transform group-hover:scale-105"
				src={src}
				alt={alt}
				objectFit="cover"
				layout="fill"
			/>
		</div>
	);
};
