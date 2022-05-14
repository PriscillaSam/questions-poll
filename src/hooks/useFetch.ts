import { useCallback, useReducer, useRef } from 'react';
import { RequestStatus } from 'types';

const API_Url = 'https://polls.apiblueprint.org';

type FetchParams = {
  url: string;
  method?: string;
  body?: string;
};

const initialState = {
  status: 'idle' as RequestStatus,
  data: null,
  error: null,
};

type State<T> = {
  status: RequestStatus;
  data: T | null;
  error: string | null;
};

export function useFetch<T>() {
  const abortRef = useRef<AbortController | null>(null);
  const [state, setState] = useReducer(
    (state: State<T>, payload: Partial<State<T>>) => ({
      ...state,
      ...payload,
    }),
    initialState
  );

  const api = useCallback(
    async ({ url, body, method = 'GET' }: FetchParams) => {
      if (abortRef.current) abortRef.current.abort(); // abort previous request
      abortRef.current = new AbortController();

      setState({ status: 'fetching' });
      try {
        let options = {
          url,
          method,
          signal: abortRef.current.signal,
          ...(body ? { body } : {}),
        };

        const response = await fetch(`${API_Url}/${url}`, options);

        if (!response.ok) {
          throw new Error('Oooops!!! Something went wrong, please try again.');
        }

        const jsonData = await response.json();
        setState({ data: jsonData, status: 'success' });
      } catch (error) {
        if (!abortRef.current.signal.aborted) {
          // only set error if request was not aborted
          setState({ status: 'error' });
        }
      }
    },
    []
  );

  return { ...state, api };
}
