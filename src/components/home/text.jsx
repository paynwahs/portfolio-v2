import Image from "next/image";
import Link from "next/link";
import githubIcon from "~/public/github-icon.svg";
import linkedinIcon from "~/public/linkedin-icon.svg";
import TypeWriter from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function ProfileText() {
	return (
		<>
			<div className="mt-5 flex flex-col items-center">
				<div className="flex flex-col">
					{/* Container for social icons */}
					<div className="gap-2 flex flex-row justify-center">
						<Link href={"https://www.linkedin.com/in/yap-yu-xiang-shawn/"}>
							<Image
								src={linkedinIcon}
								className="w-4 h-4 dark:filter dark:invert"
							/>
						</Link>

						<Link href={"https://github.com/paynwahs"}>
							<Image
								src={githubIcon}
								className="w-4 h-4 dark:filter dark:invert"
							/>
						</Link>
					</div>
					<h1 className="font-poppins-semibold text-xl lg:text-2xl">
						Hello I'm <span className="text-chart-3">Shawn</span>
					</h1>
				</div>
				<div className="m-5 flex flex-col items-center gap-1">
					<h2 className="text-3xl font-[cursive]">
						<TypeWriter
							options={{
								strings: ["Product Manager", "Full Stack Developer"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h2>
					<h2 className="font-poppins-light text-lg text-center">
						Make the world a better place with a developer
					</h2>
				</div>
				<div className="flex flex-row justify-around w-full">
					<Button variant="outline" size="responsive" asChild>
						<Link href="/contact">Contact Me</Link>
					</Button>
					{/* Able to overwrite exisiting utility classes with className 
                        thanks to cn function used in Button component */}
					<Button className="bg-chart-3" size="responsive" asChild>
						<Link href="/resume">Get Resume</Link>
					</Button>
				</div>
			</div>
		</>
	);
}
