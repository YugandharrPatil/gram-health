import Image from "next/image";

interface Product {
	name: string;
	price: number;
}

export default function Product({ name, price }: Product) {
	return (
		<div className="w-36 h-36 bg-gray-400">
			{/* <Image /> */}
			<div className="image w-20 h-20 relative top-5 mx-auto bg-black text-white">Icon</div>
			<p className="text-sm relative text-white top-5 left-10">{name}</p>
			<p className="text-sm relative text-white top-5 left-10">&#8377;{price}</p>
		</div>
	);
}
