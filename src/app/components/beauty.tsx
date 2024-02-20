import Product from "./product";

export default function Beauty() {
	return (
		<>
			<h1 className="text-4xl font-semibold text-center my-10">Explore Beauty</h1>
			<main className="my-3 flex w-5/12 justify-between mx-auto">
				<Product name="Moisturizer" price={200} />
				<Product name="Face Serum" price={150} />
				<Product name="Sunscreen" price={150} />
				<Product name="Moisturizer" price={150} />
				<Product name="Face Serum" price={150} />
			</main>
		</>
	);
}
