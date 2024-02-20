import Link from "next/link";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { Bone, Contact, Home, Menu, ShoppingBasket, Store } from "lucide-react";
import { Button } from "./ui/button";

export default function NavDropDown() {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="md:hidden" variant="navItemGhost" size="icon">
						<Menu className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-24 bg-[#0A0A38] text-white">
					<DropdownMenuItem className="bg-[#0A0A38] hover:bg-red-600 text-white cursor-pointer">
						<Home className="mr-2 h-4 w-4 inline" />
						<Link href="#">Home</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ShoppingBasket className="mr-2 h-4 w-4 inline" />
						<Link href="/products">Products</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Contact className="mr-2 h-4 w-4 inline" />
						<Link href="/contact">Contact Us</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Store className="mr-2 h-4 w-4 inline" />
						<Link href="/store">Visit Store</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
