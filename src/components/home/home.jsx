import ProfilePicture from "@/components/home/picture";
import ProfileText from "@/components/home/text";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<>
			<main className="mt-10 container flex flex-col items-center justify-center md:flex-row-reverse">
				{/* Container for image */}
				<ProfilePicture
					variant="animated"
					className="w-60 h-60 lg:w-80 lg:h-80 lg: ml-10"
				/>
				{/* Container for Introduction */}
				<ProfileText />
			</main>
		</>
	);
}
