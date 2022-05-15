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
  error: null,
};

type State = {
  status: RequestStatus;
  error: string | null;
};

export function useFetch<T>() {
  const abortRef = useRef<AbortController | null>(null);
  const [state, setState] = useReducer(
    (state: State, payload: Partial<State>) => ({
      ...state,
      ...payload,
    }),
    initialState
  );

  const api = useCallback(
    async (
      { url, body, method = 'GET' }: FetchParams,
      handleSuccess?: (data: T) => void
    ) => {
      if (abortRef.current) abortRef.current.abort(); // abort previous request
      abortRef.current = new AbortController();

      setState({ status: 'fetching' });
      try {
        let options = {
          url,
          method,
          signal: abortRef.current.signal,
          ...(body ? { body } : {}),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(`${API_Url}/${url}`, options);

        if (!response.ok) {
          throw new Error('Oooops!!! Something went wrong, please try again.');
        }

        const jsonData = await response.json();
        setState({ status: 'success' });
        handleSuccess?.(jsonData);
      } catch (error: any) {
        if (error?.name !== 'AbortError') {
          // only set error if request was not aborted
          setState({ status: 'error', error: error.message });
        }
      }
    },
    []
  );

  return { ...state, api };
}
