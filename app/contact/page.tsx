"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	// {
	// 	icon: <Twitter size={20} />,
	// 	href: "https://twitter.com/chronark_",
	// 	label: "Twitter",
	// 	handle: "@chronark_",
	// },
	{
		icon: <Mail size={20} />,
		href: "mailto:indimindservices@gmail.com",
		label: "Email",
		handle: "indimindservices@gmail.com",
	},
	// {
	// 	icon: <Github size={20} />,
	// 	href: "https://github.com/chronark",
	// 	label: "Github",
	// 	handle: "chronark",
	// },
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="flex justify-center items-center mx-auto px-4 min-h-screen container">
				<div className="gap-8 lg:gap-16 grid grid-cols-1 sm:grid-cols-3 mx-auto mt-32 sm:mt-0 w-full">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="relative flex flex-col items-center gap-4 md:gap-8 md:py-24 p-4 md:p-16 lg:pb-48 duration-700 group"
							>
								<span
									className="absolute bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent w-px h-2/3"
									aria-hidden="true"
								/>
								<span className="group-hover:text-white group-hover:bg-zinc-900 relative z-10 flex justify-center items-center border-zinc-500 group-hover:border-zinc-200 bg-zinc-900 drop-shadow-orange border rounded-full w-12 h-12 text-sm text-zinc-200 duration-1000">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="group-hover:text-white font-display font-medium text-zinc-200 lg:text-xl xl:text-3xl duration-150">
										{s.handle}
									</span>
									<span className="group-hover:text-zinc-200 mt-4 text-center text-sm text-zinc-400 duration-1000">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
