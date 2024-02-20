import Image from "next/image";
import deliveryBoy from "../../../public/images/delivery-boy.png";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="w-full h-96 bg-gradient-to-r to-[#7d7d96] from-[#8ed88f]">
			<div className="container flex h-full">
				<div className="text my-auto">
					<h1 className="text-[2.7rem] font-semibold">
						Get Your Medicines <br />
						Delivered on Time
					</h1>
					<p className="mt-5 text-[1.05rem] block w-5/12">
						GramHealth brings you a hassle-free experience of getting your pharmaceutical needs at your doorstep
					</p>
					<div className="buttons flex gap-4 mt-10">
						<Button variant="headerOutline">View Products</Button>
						<Button variant="headerSolid" className="px-7">
							Order Now
						</Button>
					</div>
				</div>
				<Image src={deliveryBoy} alt="delivery-boy" />
			</div>
		</div>
	);
}
