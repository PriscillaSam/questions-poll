export type RequestStatus = 'idle' | 'fetching' | 'success' | 'error';

export type Choice = {
	choice: string;
	votes: number;
	url: string;
};

export type Question = {
	question: string;
	published_at: string;
	url: string;
	choices: Choice[];
};
