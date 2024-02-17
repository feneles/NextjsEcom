"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import { type CoverImage } from "@/contentful/contentfulApi.types";

type CarouselProps = {
	images: CoverImage[];
};

export const ProductCarousel: React.FC<CarouselProps> = ({ images }) => {
	const router = useRouter();

	return (
		<div className="scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth py-7">
			{images.map((image, index) => (
				<div
					key={index}
					className="relative h-44 w-36 cursor-pointer gap-4 overflow-hidden rounded-lg border-2 border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400"
					onClick={() => router.push(`?zdjecie=${index}`)}
				>
					<Image
						src={image.url}
						alt={image.title}
						layout="fill"
						objectFit="cover"
						className="transition-all duration-300 ease-in-out hover:scale-105"
					/>
				</div>
			))}
		</div>
	);
};
