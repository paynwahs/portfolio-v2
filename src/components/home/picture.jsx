import profilePicture from "~/public/profile-picture.png";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pictureVariants = cva("rounded-full object-cover", {
	variants: {
		variant: {
			default: "",
			animated:
				"transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-110",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export default function ProfilePicture({ className, variant }) {
	return (
		<>
			<Image
				src={profilePicture}
				// className="w-60 h-60 rounded-full object-cover transition delay-150 duration-600 ease-in-out hover:-translate-y-1 hover:scale-110 lg:ml-10 lg:w-80 lg:h-80"
				className={cn(pictureVariants({ variant, className }))}
			/>
		</>
	);
}
