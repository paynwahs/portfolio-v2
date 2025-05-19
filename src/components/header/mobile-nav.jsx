import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Apple } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
	return (
		<>
			<div className="flex md:hidden w-full">
				<Sheet>
					<SheetTrigger>
						<AlignJustify className="size-10" />
					</SheetTrigger>
					<SheetContent side="left">
						<div className="flex items-center h-14 pl-3">
							<Link href="/">
								<Apple className="text-red-500" />
							</Link>
						</div>
						<nav className="flex flex-col gap-3 mt-3 pl-3 items-center">
							<Link href="/About"> About </Link>
							<Link href="/projects"> Project </Link>
							<Link href="/resume"> Resume </Link>
							<Link href="/contact"> Contact </Link>
						</nav>
					</SheetContent>
				</Sheet>
				<Link
					href="/"
					className="flex-1 flex justify-end text-5xl font-poppins-extrabold"
				>
					SHAWN
				</Link>
			</div>
		</>
	);
}
