import styled from 'styled-components';

interface HeadingProps {
	className?: string;
	children: React.ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Heading({ tag: Element, children, className }: HeadingProps) {
	return <Element className={className}>{children}</Element>;
}

export const StyledHeading = styled(Heading)`
	font-size: ${({ size, theme }) => theme.fonts[size!]};
`;
