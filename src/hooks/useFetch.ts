import { useCallback, useReducer, useRef } from 'react';
import axios from 'axios';
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
          method,
          url: `${API_Url}/${url}`,
          signal: abortRef.current.signal,
          ...(body ? { body } : {}),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await axios(options);

        setState({ status: 'success' });
        handleSuccess?.(response.data);
      } catch (error: any) {
        if (error?.name !== 'CanceledError') {
          console.error(error);
          // only set error if request was not aborted
          setState({ status: 'error', error: error.message });
        }
      }
    },
    []
  );

  return { ...state, api };
}
