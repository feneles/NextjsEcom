"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { type CoverImage } from "@/contentful/contentfulApi.types";

type ProductImagesProps = {
	images: CoverImage[];
};

export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
	const searchParams = useSearchParams();
	const imageIndex = parseInt(searchParams.get("zdjecie") || "0", 10);
	const selectedImage = images[Math.max(0, Math.min(imageIndex, images.length - 1))];

	return (
		<div className="relative h-64 w-56">
			<Image
				src={selectedImage.url}
				alt={selectedImage.title || "Zdjęcie produktu"}
				objectFit="cover"
				className="rounded"
				layout="fill"
			/>
		</div>
	);
};
