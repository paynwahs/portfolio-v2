"use client";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "~/src/components/ui/button";
import { CirclePlus, CircleMinus } from "lucide-react";

export default function ResumeCard({
	circleIsOpen,
	onCircleClick,
	experience,
}) {
	//Experience card contains experience(organisation, role, date, dexcription and lineItems), circleIsOpen and onCircleClick
	//Education card contains experience(organisation, role and date)
	const organisation = experience.organisation;
	const role = experience.role;
	const date = experience.date;
	const description = experience.description ?? null;
	const lineItems = experience.lineItems ?? null;

	return (
		<div className="px-7 py-4 flex flex-col bg-card rounded-lg">
			{/* TODO: Make it look god on mobile view (xs viewport) */}
			{/* default font size is text-base */}
			<div className="flex flex-row justify-between">
				<h1 className="text-chart-2">{organisation}</h1>
				<div className="rounded-2xl bg-chart-2 px-1">
					<span className="font-poppins-regular text-card text-sm">{date}</span>
				</div>
			</div>
			<h2 className="font-poppins-semibold">{role}</h2>

			{description && (
				<span className="w-full text-justify text-muted-foreground inline-block font-poppins-regular">
					{description}
				</span>
			)}
			{lineItems && circleIsOpen !== null && onCircleClick && (
				<Collapsible open={circleIsOpen} onOpenChange={onCircleClick}>
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm" className="float-right">
							{circleIsOpen ? (
								<CircleMinus className="h-4 w-4" />
							) : (
								<CirclePlus className="h-4 w-4" />
							)}
							<span className="sr-only">Toggle</span>
						</Button>
					</CollapsibleTrigger>
					<CollapsibleContent>
						<div>
							<ul className="marker:text-chart-3 styles.bulletPoints list-outside list-[disc] ms-4 font-poppins-regular">
								{lineItems.map((lineItem, i) => {
									return <li key={i}>{lineItem}</li>;
								})}
							</ul>
						</div>
					</CollapsibleContent>
				</Collapsible>
			)}
		</div>
	);
}
