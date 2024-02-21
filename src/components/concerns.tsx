import { concerns } from "@/server/concerns";
import ConcernButton from "./concern-button";
import { Button } from "./ui/button";

export default function Concerns() {
	return (
		<main className="container text-center">
			<h1 className="text-4xl font-semibold">Shop by Concerns</h1>
			<div className="flex justify-between mx-auto w-1/2">
				{concerns.map((concern) => (
					<div key={concern.id}>
						<ConcernButton id={concern.id} name={concern.name} image={concern.image} />
					</div>
				))}
			</div>
		</main>
	);
}
