import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from 'hooks';

export function useCreateQuestion() {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState<string[]>([]);
  const { api, status } = useFetch();
  const navigate = useNavigate();

  const addChoice = (choice: string) => {
    const choiceExists = choices.some(
      (c) => c.toLowerCase() === choice.toLowerCase()
    );
    if (!choiceExists) setChoices([...choices, choice]);
  };

  const removeChoice = (choice: string) =>
    setChoices(choices.filter((c) => c.toLowerCase() !== choice.toLowerCase()));

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget } = event;

    if (key === 'Enter' && currentTarget.value) {
      addChoice(event.currentTarget.value);
      currentTarget.value = '';
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuestion(value);
  };

  const createQuestion = () => {
    const body = {
      question,
      choices,
    };

    api(
      {
        url: 'questions',
        body: JSON.stringify(body),
        method: 'POST',
      },
      () => {
        navigate('/');
      }
    );
  };

  return {
    question,
    choices,
    removeChoice,
    handleOnChange,
    handleEnter,
    createQuestion,
    status,
  };
}
