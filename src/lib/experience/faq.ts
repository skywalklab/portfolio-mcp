export interface FAQ {
	question: string;
	answer: string;
}

export const bestPractices: FAQ[] = [
	{
		question: 'Reducing code complexity',
		answer:
			'I find code that is written clearly and consistently is much easier to scale up and debug.'
	},
	{
		question: "YAGNI (You Ain't Gonna Need It)",
		answer:
			"I think it's important to only build a product or feature that is actually wanted or needed by the target customers. I've been on teams that had a great ideas and covered every edge case, but the products didn't do well because the target customers didn't care about those ideas."
	},
	{
		question: 'Task-centered Git commits',
		answer:
			'In the same vein as keeping the code simple, using one commit per fix or implementation also makes the code base more maintainable. The commits are easier to read, and it is easier to navigate the code editor when the file changes are of the same context.'
	}
];

export const aiInSoftwareDevelopment: FAQ = {
	question:
		'What do you believe is the role of AI in software development today and how are you personally using it?',
	answer:
		"I think AI is best used for automation and documentation. That said, nothing actually beats a tool's documentation, but AI can be used for a quick lookup, syntax change, or google search replacement. Although it can fill up context quickly, 'do a websearch (or webfetch)' is a very useful tool for AI chat. Using AI for automation has been the most useful case for me since it is effective at parsing and summarizing data. In other words, AI is most useful for a task where you can give it the context it needs (via websearch tool or MCP server)."
};
