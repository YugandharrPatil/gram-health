import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { concerns } from "@/server/concerns";
import Image from "next/image";

export default function ConcernPage({ params }: { params: { id: number } }) {
	return (
		<Card>
			<CardContent>
				<div className="flex justify-between mx-auto w-1/2 flex-wrap">
					{concerns[params.id - 1].concernItems.map((item: any) => (
						<Button variant="ghost" key={item.id} className="h-42 w-42 text-center font-bold">
							<div className="p-0">
								<Image src={item.imageURL} alt={item.itemName} className="w-28 h-28" />
								<h3 key={item.id} className="text-md">
									{item.itemName}
								</h3>
							</div>
						</Button>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
