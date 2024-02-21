import { categories } from "@/server/categories";
import CategoryButton from "./category-button";

export default function Categories() {
	return (
		<main className="container text-center">
			<h1 className="text-4xl font-semibold">Shop by Categories</h1>
			<div className="flex justify-between mx-auto w-1/2">
				{categories.map((category) => (
					<div key={category.id}>
						<CategoryButton id={category.id} name={category.name} image={category.image} />
					</div>
				))}
			</div>
		</main>
	);
}
