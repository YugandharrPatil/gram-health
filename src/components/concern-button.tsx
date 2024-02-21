type CategoryItemProps = {
	id: number;
	name: string;
	image: StaticImageData;
	// categoryItems?: { id: number; item: string };
};

import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import { Button } from "../components/ui/button";

export default function ConcernButton({ id, name, image }: CategoryItemProps) {
	return (
		<Button variant="ghost" className="w-32 h-32 hover:underline" asChild>
			<Link href={`/concern/${id}`}>
				<div className="">
					<Image src={image} alt={name} />
					<h3 className="font-bold">{name}</h3>
				</div>
			</Link>
		</Button>
	);
}
