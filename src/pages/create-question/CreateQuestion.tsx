import styled, { css } from 'styled-components';
import { Badge, Button, Container, Heading, TextInput } from 'components';
import { useCreateQuestion } from 'hooks';

const FlexContainer = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing.sm};
    flex-wrap: wrap;
    margin: ${spacing.sm} 0 ${spacing.md};
  `
);

function CreateQuestion() {
  const {
    choices,
    question,
    removeChoice,
    handleEnter,
    handleOnChange,
    createQuestion,
    status,
  } = useCreateQuestion();

  return (
    <Container>
      <Heading size="lg" as="h1">
        Create a new question
      </Heading>

      <TextInput
        label="Question"
        name="question"
        value={question}
        onChange={handleOnChange}
        type="text"
      />

      <TextInput
        label="Enter choices"
        name="choice"
        infoText="Press Enter to add a choice"
        onKeyDown={handleEnter}
        type="text"
      />

      {choices.length > 0 ? (
        <FlexContainer>
          {choices.map((choice) => (
            <Badge
              data-testid={choice}
              key={choice}
              remove={() => removeChoice(choice)}
            >
              {choice}
            </Badge>
          ))}
        </FlexContainer>
      ) : null}

      <Button
        disabled={!question || choices.length === 0}
        onClick={createQuestion}
      >
        {status === 'fetching' ? 'Creating...' : 'Create Question'}
      </Button>
    </Container>
  );
}

export default CreateQuestion;
