import styles from "./about.module.css";
import SectionHeader from "@/components/ui/section-header/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import fullLengthProfilePicture from "~/public/full-length-profile-picture.jpg";

export default function About() {
	return (
		<>
			<div className="container flex flex-col items-center">
				<SectionHeader title="About Me" description="Why Choose Me?" />
				<div className="mb-10 flex flex-row shadow-[0_0_20px_-4px] shadow-muted-foreground items-stretch border-2 border-green-500">
					<div className="hidden w-1/2 lg:flex overflow-hidden lg:min-h-0 border-2 border-blue-500 relative">
						<Image
							src={fullLengthProfilePicture}
							className="w-full h-full object-cover border-2 border-pink-500"
						/>
					</div>
					{/* Currently the image div is taller than the text div because the text div is not getting it's children height properly
                    We know this because when you replace it the text div with a fixed height div, the image div actually follows the text div height
                    TODO: Ensure this div inherits its children height properly. Currently */}
					<div className="flex flex-col p-[30px] flex-1 lg:w-1/2 border-2 border-red-500">
						<span className="text-justify">
							My eye was opened to the wonders and potential of software
							engineering in 2017. The sweet satisfaction of watching users
							benefit from the software I create drives me to continuously hone
							my skills. I enjoy the challenge and am not afraid to learn new
							things on my own and on the go. A strong professional and willing
							to be an asset for an organisation.
						</span>
						<div className="my-20">
							<h2>Here are a few highlights</h2>
							<ul className="marker:text-chart-3 styles.bulletPoints list-inside list-[disc]">
								<li>End-to-end Software Development</li>
								<li>Full Stack Web Development</li>
								<li>Product Management</li>
								<li>AI ENthusiast and Engineer</li>
							</ul>
							{/* Todo: Try to make the hbullet point bigger */}
							{/* <ul
								className={`${styles.bulletPoints} marker:text-chart-3 list-inside list-[disc] bg-red-500`}
							>
								<li>End-to-end Software Development</li>
								<li>End-to-end Software Development</li>
							</ul> */}
						</div>
						<div className="flex flex-row w-full gap-x-8">
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
				</div>
			</div>
		</>
	);
}
