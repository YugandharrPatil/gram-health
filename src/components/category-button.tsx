type CategoryItemProps = {
	id: number;
	name: string;
	image: StaticImageData;
	// categoryItems?: { id: number; item: string };
};

import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import { Button } from "../components/ui/button";
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuGroup,
// 	DropdownMenuItem,
// 	DropdownMenuLabel,
// 	DropdownMenuPortal,
// 	DropdownMenuSeparator,
// 	DropdownMenuShortcut,
// 	DropdownMenuSub,
// 	DropdownMenuSubContent,
// 	DropdownMenuSubTrigger,
// 	DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu";

export default function CategoryButton({ id, name, image }: CategoryItemProps) {
	return (
		<Button variant="ghost" className="w-32 h-32 hover:underline" asChild>
			<Link href={`/category/${id}`}>
				<div className="">
					<Image src={image} alt={name} />
					<h3 className="font-bold">{name}</h3>
				</div>
			</Link>
		</Button>
	);
}
// <DropdownMenu>
// 	<DropdownMenuTrigger asChild>
// 		<Button variant="ghost" className="w-32 h-32 hover:underline" asChild>
// 			<Link href={`/category/${id}`}>
// 				<div className="">
// 					<Image src={image} alt={name} />
// 					<h3 className="font-bold">{name}</h3>
// 				</div>
// 			</Link>
// 		</Button>
// 	</DropdownMenuTrigger>
// 	<DropdownMenuContent className="w-56">
// 		<DropdownMenuLabel>{name}</DropdownMenuLabel>
// 		{categoryItems?.map((item: any, index: any) => (
// 			<DropdownMenuItem key={index}>{item}</DropdownMenuItem>
// 		))}
// 	</DropdownMenuContent>
// </DropdownMenu>
