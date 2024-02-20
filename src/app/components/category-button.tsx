type CategoryItemProps = {
	id: number;
	name: string;
	price: number;
	image: any;
	categoryItems: string[];
};

import Image from "next/image";

import { createGzip } from "zlib";
import { Button } from "../components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function CategoryButton({ name, image, categoryItems }: any) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="w-32 h-32 hover:underline">
					<div className="">
						<Image src={image} alt={name} />
						<h3 className="font-bold">{name}</h3>
					</div>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>{name}</DropdownMenuLabel>
				{categoryItems?.map((item: any, index: any) => (
					<DropdownMenuItem key={index}>{item}</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
