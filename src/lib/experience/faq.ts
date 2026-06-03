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

export const fullStackProject: FAQ = {
	question:
		"Describe a specific project that you're proud of where you had an impact across the stack. What made this project particularly meaningful or challenging for you as a full-stack developer?",
	answer:
		'It was data visualization of 5-6 huge datasets. While working for a college ranking website, I used the career and university data from the US Bureau of Labor Statistics (BLS) to calculate the average salaries and the amount of time to recoup the total cost of obtaining a specific university degree for each degree. This leveraged the database, APIs, and a user interface. Determining how to calculate these numbers and how to present the info in a user-friendly way was challenging, but the most challenging part came later. I tied this system into a personality test results tool. I mapped 16 personality traits in the test to workplace soft skills, essentially. Accurately weighting and mapping these traits took a lot of consideration. The soft skills were already mapped to the occupation data from BLS, so I was able to suggest jobs and university degrees based on personality test results.'
};

export const summary: FAQ = {
	question: 'Summary',
	answer:
		"I'm a full-stack developer in Nice, France. I'm American, but I've been living in France for about five years. I studied for my masters in Paris at Grenoble Ecole de Management, where I won the award for best thesis. Since about 2021, I've been working remotely as a software developer for a few startups, doing whatever was needed from me from front-end and UX design to database, APIs, data visualizations, AI integration, automated B2B outreach via email & social media APIs, AI chatbots, custom scraping tools, and enterprise licensing systems. I have a background education in digital business and marketing, but I'm a self-taught software developer through The Odin Project, initially, and software documentation thereafter. My philosophy in this field is that there are no skill boundaries because anything can be learned by reading the docs. So I'm happy to learn anything new that is needed for the job that you don't see in the skills section."
};

export const createSolution: FAQ = {
	question: 'What is your most creative solution?',
	answer: `My most creative solution was probably when developing a system to suggest degrees and occupations based on a personality test score. The degree data came from NCES Ipeds and the occupation data came from the US Bureau of Labor Statistics. I had previously developed a tool that had connected those two data sources, so that a user could see career data based on a degree and vice versa.

The personality test was based on 19 traits across 4 situations. There were about 64 different trait-situations (not all traits had 4). It was on a scale of 1-5, but some results were grouped; there were about 192 outcomes (64 * 3).

I found a resource from O*NET that mapped 'work styles' (e.g., integrity, stress tolerance, attention to detail, etc.) to occupations. Since I had already mapped occupations to degrees, I used a 'euclidean distance' algorithm to map the personality trait scores to the O*NET work styles.

Suggesting occupations based on a personality test isn't new, but I don't think it's been done this way before. The challenge came in determining the best algorithm and best weights per trait since not all traits were applicable to all 4 situations (e.g., no 'sociable' trait for 'by yourself' situation).`
};
