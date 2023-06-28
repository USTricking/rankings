export const SITE = {
	title: 'US Tricking Rankings',
	description: 'Open-source site for US Tricking Rankings',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '../public/ustleague_banner.jpeg',
		alt:
			'US Tricking League logo' +
			' with a blurred background of people sitting in a gym',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/USTricking/rankings/blob/main/`;

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Dive Deeper': [
			{ text: '2023 Season', link: 'en/introduction' },
			{ text: 'Events', link: 'en/events' },
			{ text: 'Competitors', link: 'en/competitors' },
		],
	},
};
