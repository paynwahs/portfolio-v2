export default function DividerSkewer({ title, subheader }) {
	return (
		<>
			<div className="flex justify-center items-center relative w-[180px] mt-2 ">
				<div className="w-full h-[2px] bg-foreground"></div>
				<div className="absolute rounded-[35px] w-[35px] h-[10px] bg-chart-3"></div>
			</div>
		</>
	);
}
