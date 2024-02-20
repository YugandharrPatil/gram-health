import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
	return (
		<footer className="h-20 w-full bg-[#5AE65C]">
			<div className="container h-full flex items-center justify-between">
				<Button variant="footer">
					<span className="text-lg">View Cart</span>
					<ShoppingCart className="ml-2 h-6 w-6" />
				</Button>
				<div className="flex gap-6">
					<Button variant="leaveSolid" className="px-6">
						Leave
					</Button>
					<Button variant="headerSolid" className="px-6">
						Checkout
						<ArrowRight className="ml-1 h-5 w-5" />
					</Button>
				</div>
			</div>
		</footer>
	);
}
