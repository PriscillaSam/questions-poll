import { Link, Text } from 'components';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    p:first-child {
      font-size: 100px;
    }
  `
);

export function NotFound() {
  return (
    <Wrapper>
      <p>&#128533;</p>
      <Text>Sorry, we couldn't find what you are lookin for</Text>
      <Link href="/">Go to questions</Link>
    </Wrapper>
  );
}
