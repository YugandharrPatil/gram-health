import Link from "next/link";
import { Button } from "./ui/button";

export default function NavItem({ target, navText, variant }: { target: string; navText: string; variant: any }) {
	return (
		<Button asChild variant={variant} className={"mr-3 font-normal text-[1.3rem] tracking-wide}"}>
			<Link href={target}>{navText}</Link>
		</Button>
	);
}
