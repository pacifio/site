"use client";

export default function About() {
	return (
		<div className="text-left px-6 md:px-12 lg:px-20 xl:px-28 mt-10">
			<h3 className="text-xl mb-2 font-medium">My Mission?</h3>
			<div className="flex items-center justify-center">
				<div className="space-y-3 text-base leading-relaxed">
					<p className="text-muted-foreground">
						The future of Human Computer Interaction is changing and I am
						committed to making AI truly accessible.{" "}
						<span className="font-semibold text-foreground">
							At IdeaBox AI
						</span>
						, I help teams design AI implementation into their products and
						oversee architecture across applications.
						<br />
						<br />
						Previously, I founded{" "}
						<span className="font-semibold text-foreground">Antarys</span> — an AI
						infrastructure platform now open sourced. I strongly believe in a
						future where truly intelligent machines with redefined HCI make
						natural language the only barrier between man and machines.
					</p>
				</div>
			</div>
		</div>
	);
}
