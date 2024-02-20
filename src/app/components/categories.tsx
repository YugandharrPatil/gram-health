import CategoryButton from "./category-button";

import babyCare from "../../../public/images/categories/baby-care.png";
import bodyCare from "../../../public/images/categories/body-care.png";
import dental from "../../../public/images/categories/dental.png";
import firstAid from "../../../public/images/categories/first-aid.png";
import womansCare from "../../../public/images/categories/womans-care.png";

const categories = [
	{
		id: 1,
		name: "Baby Care",
		image: babyCare,
		categoryItems: ["Baby Care 1", "Baby Care 2", "Baby Care 3", "Baby Care 4", "Baby Care 5", "Baby Care 6", "Baby Care 7", "Baby Care 8"],
	},
	{
		id: 2,
		name: "Dental",
		image: dental,
		categoryItems: ["Dental 1", "Dental 2", "Dental 3", "Dental 4", "Dental 5", "Dental 6", "Dental 7", "Dental 8"],
	},
	{
		id: 3,
		name: "Body Care",
		image: bodyCare,
		categoryItems: ["Body Care 1", "Body Care 2", "Body Care 3", "Body Care 4", "Body Care 5", "Body Care 6", "Body Care 7", "Body Care 8"],
	},
	{
		id: 4,
		name: "Woman's Care",
		image: womansCare,
		categoryItems: [
			"Woman's Care 1",
			"Woman's Care 2",
			"Woman's Care 3",
			"Woman's Care 4",
			"Woman's Care 5",
			"Woman's Care 6",
			"Woman's Care 7",
			"Woman's Care 8",
		],
	},
	{
		id: 5,
		name: "First Aid",
		image: firstAid,
		categoryItems: ["First Aid 1", "First Aid 2", "First Aid 3", "First Aid 4", "First Aid 5", "First Aid 6", "First Aid 7", "First Aid 8"],
	},
];

export default function Categories() {
	return (
		<main className="container text-center">
			<h1 className="text-4xl font-semibold">Shop by Categories</h1>
			<div className="flex justify-between mx-auto w-1/2">
				{categories.map((category) => (
					<div key={category.id}>
						<CategoryButton name={category.name} image={category.image} categoryItems={category.categoryItems} />
					</div>
				))}
			</div>
			{/* <div className="mt-5 bg-black text-white h-80 w-full"></div> */}
		</main>
	);
}
