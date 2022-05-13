import { useCallback, useState } from 'react';
import { RequestStatus } from 'types';

const API_Url = 'https://polls.apiblueprint.org';

type FetchParams = {
	url: string;
	method?: string;
	body?: FormData | URLSearchParams | string | Blob | ArrayBuffer;
};

export function useFetch() {
	const [status, setStatus] = useState<RequestStatus>('idle');

	const api = useCallback(
		async (
			{ url, body, method = 'GET' }: FetchParams,
			callback?: (response: any) => void
		) => {
			setStatus('fetching');
			try {
				let options = {
					url,
					method,
					...(body ? { body: JSON.stringify(body) } : {}),
				};

				const response = await fetch(`${API_Url}/${url}`, options);

				if (!response.ok) {
					throw new Error('Oooops!!! Something went wrong, please try again.');
				}

				const jsonData = await response.json();
				callback && callback(jsonData);
			} catch (error) {
				// TODO: handle error
				console.error(error);
				setStatus('error');
			} finally {
				// TODO: set state
				setStatus('idle');
			}
		},
		[]
	);

	return [status, api] as const;
}
