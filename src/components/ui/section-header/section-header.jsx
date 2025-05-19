import DividerSkewer from "@/components/ui/section-header/divider-skewer";

export default function SectionHeader({ title, description }) {
	return (
		<>
			<div className="flex flex-col items-center mb-12">
				<h1 className="font-poppins-bold text-3xl">{title}</h1>
				<span className="font-poppins-thin text-xs mt-2 mb-4 tracking-[3px]">
					{description}
				</span>
				<DividerSkewer />
			</div>
		</>
	);
}
