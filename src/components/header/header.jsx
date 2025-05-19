import { Main } from "next/document";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "~/public/github-icon.svg";

export default function Header() {
	return (
		<>
			<header className="top-0 w-full border-b xl:px-20">
				<div className="container h-40 flex items-center">
					{/* Desktop */}
					<MainNav />
					{/* Mobile-nav */}
					<MobileNav />
					{/* Desktop and Mobile */}

					{/* <h1 className="flex-1 flex items-center justify-end">
						<Link href="/">
							<Image
								src={githubIcon}
								className="w-6 h-6 dark:filter dark:invert"
							/>
						</Link>
					</h1> */}
				</div>
			</header>
		</>
	);
}
