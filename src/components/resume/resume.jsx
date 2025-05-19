"use client";

import * as React from "react";
import SectionHeader from "~/src/components/ui/section-header/section-header";
import ResumeCard from "./resume-card";

const experiences = [
	{
		organisation: "Revive Labs",
		role: "Software Engineer Intern",
		date: "Jul 2023 - Jan 2024", //E.g. Jul 2023 - Jan 2024
		description:
			"First engineering hire; worked directly with the CTO to develop and launch Revive Labs' password-less recovery SDK, securing first 2 customers and driving market impact",
		lineItems: [
			"Implemented a database infrastructure with Restful API, with stringent security policies to safeguard sensitive customer data effectively",
			"Developed and deployed a real time communication service using WebSocket technology, facilitating seamless device interoperability and enhancing user engagement",
			"Worked with Svelte.js written in Typescript, SQL language",
		],
	},
	{
		organisation: "Shopee",
		role: "Product Management Intern",
		date: "Jan 2023 - May 2023", //E.g. Jul 2023 - Jan 2024
		description:
			"Responsible for leading cross-functional teams to develop and deliver successful features for an in-house enterprise efficiency software",
		lineItems: [
			"Create bespoke features for an in-house enterprise efficiency software used by all Shopee employees",
			"Provide daily production support to all global users of Shopee in-house enterprise efficiency software",
			"Enhance bugs and feedback collection and analysis system to reduce redundant bug reports and improve prioritization of new feature development",
		],
	},
	{
		organisation: "Razer",
		role: "Software Developer Intern",
		date: "May 2022 - Jul 2022", //E.g. Jul 2023 - Jan 2024
		description:
			"Work on developing the next itearation of Razer Synapse Software",
		lineItems: [
			"Co-developed the next iteration of Razer’s unified configuration software used by Razer’s customers",
			"Migrated JavaScript code base to TypeScript, improving code quality, maintainability, and scalability",
			"Worked with React and Redux on front end and Node.js on back end",
		],
	},
	{
		organisation: "F.I.R Digital",
		role: "Software Developer Intern",
		date: "May 2021 - Jul 2021", //E.g. Jul 2023 - Jan 2024
		description:
			"Managed 3 end-to-end software development projects from planning to deployment",
		lineItems: [
			"Create bespoke features for an in-house enterprise efficiency software used by all Shopee employees",
			"Provide daily production support to all global users of Shopee in-house enterprise efficiency software",
			"Enhance bugs and feedback collection and analysis system to reduce redundant bug reports and improve prioritization of new feature development",
		],
	},
	{
		organisation: "TOFFS Technologies",
		role: "Software Developer Intern",
		date: "Feb 2020 - Jul 2020", //E.g. Jul 2023 - Jan 2024
		description:
			"Worked on Qualitative Assurance (QA) testing for their SAAS product and APIs",
		lineItems: [
			"Worked on QA Testing for the new TOFFS's SaaS platform which will be used by all their clients",
			"Supported the CI/CD of TOFFS’s SaaS platform",
			"Worked with NGINX software, Linux, RESTful APIs and various website optimization tools",
		],
	},
	{
		organisation: "Nanyang Technological University",
		role: "STUDENT TUTOR GROUP (STG) TUTOR",
		date: "May 2021 - Aug 2021", //E.g. Jul 2023 - Jan 2024
		description:
			"Tutor in charge of teaching SC1003 (Introduction to Computational Thinking and Programming) to about 30 tutees",
		lineItems: [
			"Taught important programming concepts and good practices in C and Python",
			"Conducted weekly tutorial sessions",
		],
	},
];

const educations = [
	{
		organisation: "Nanyang Technological University",
		role: "Bachelor of Business (with specialisation in Business Analytics) and Bachelor of Engineering (Computer Science)",
		date: "2020-2025",
	},
	{
		organisation: "Temasek Junior College",
		role: "General Certificate of Education Advanced Level",
		date: "2016-2017",
	},
	{
		organisation: "Chung Cheng High School (Main)",
		role: "General Certificate of Education Ordinary Level",
		date: "2012-2015",
	},
];

export default function Resume() {
	const noOfExperiences = experiences.length;
	const [isOpen, setIsOpen] = React.useState(
		Array(noOfExperiences).fill(false)
	);

	function handleOpenExperience(i) {
		const nextIsOpen = [...isOpen];
		nextIsOpen[i] = !nextIsOpen[i];
		setIsOpen(nextIsOpen);
	}

	return (
		<div className="container space-y-4">
			<div>
				<SectionHeader
					title="Experience"
					description="Learning how to be useful to society"
				/>
				<div className="space-y-4">
					{experiences.map((experience, i) => {
						return (
							<ResumeCard
								key={i} //All jsx elements directly inside a map() always needs keys to know which element to re-render
								experience={experience}
								circleIsOpen={isOpen[i]}
								onCircleClick={() => {
									handleOpenExperience(i);
								}}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<SectionHeader title="Education" description="Learning how to learn" />
				<div className="space-y-4">
					{/* <ResumeCard experience={education[0]} /> */}
					{educations.map((education, i) => {
						return <ResumeCard key={i} experience={education} />;
					})}
				</div>
			</div>
		</div>
	);
}
