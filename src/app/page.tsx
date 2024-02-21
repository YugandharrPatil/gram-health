import Beauty from "@/components/beauty";
import Categories from "@/components/categories";
import Concerns from "@/components/concerns";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Header />
			<Categories />
			<Concerns />
			{/* <Beauty /> */}
			<Footer />
		</>
	);
}
