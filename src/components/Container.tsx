import { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

const StyledContainer = styled.section`
	padding: 1em;

	@media (min-width: ${breakpoints.tablet}) {
		padding: 5em;
	}
`;

export function Container({ children, className }: ContainerProps) {
	return <StyledContainer className={className}>{children}</StyledContainer>;
}

export const GridContainer = styled(Container)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1em;
`;
