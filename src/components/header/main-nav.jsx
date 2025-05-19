import { Apple } from "lucide-react";
import Link from "next/link";

export default function MainNav() {
	return (
		<>
			<div className="hidden md:flex w-full">
				<Link href="/" className="text-5xl font-poppins-extrabold">
					SHAWN
				</Link>
				{/* <div className=""> */}
				<nav className="flex-1 justify-end flex items-center gap-20 mr-2 font-poppins-regular">
					<Link href="/About"> About </Link>
					<Link href="/projects"> Project </Link>
					<Link href="/resume"> Resume </Link>
					<Link href="/contact"> Contact </Link>
				</nav>
				{/* </div> */}
			</div>
		</>
	);
}
