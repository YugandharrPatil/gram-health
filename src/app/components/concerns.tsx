"use client";

import CategoryButton from "./category-button";

export default function Concerns() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-center">Health Concerns</h1>
			<div className="mt-3 flex w-5/12 justify-between mx-auto">
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Covid" />
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Fever" />
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Cold" />
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Diarrhoea" />
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Chickenpox" />
				<CategoryButton onClick={() => console.log("Clicked")} icon="iconURL" text="Back Pain" />

				{/* <CategoryButton onClick={(CATEGORIES.pharma) => setCategory} icon="iconURL" text={CATEGORIES.pharma} /> */}
			</div>
		</>
	);
}
