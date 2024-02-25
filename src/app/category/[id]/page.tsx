import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/server/categories";
import Image from "next/image";

// db
import { db } from "@/db/index";
import { items } from "@/db/schema";

async function getItems() {
	const result: any = await db.select().from(items);
	console.log(result);
	return result;
}

export default async function CategoryPage({ params }: { params: { id: number } }) {
	const items = await getItems();
	return (
		<Card>
			<CardContent>
				<div className="flex justify-between mx-auto w-1/2 flex-wrap">
					{items.map((item: any) => (
						<Button variant="ghost" key={item.id} className="h-42 w-42 text-center font-bold">
							<div className="p-0">
								<Image src={item.imageURL} alt={item.itemName} className="w-28 h-28" />
								<h3 key={item.id} className="text-md">
									{item.name}
								</h3>
								<small className="text-sm">&#8377;{item.price}</small>
								<br />
								<small className="text-sm">Quantity Remaining: {item.quantity}</small>
							</div>
						</Button>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
