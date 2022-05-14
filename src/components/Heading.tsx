import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	tag: 'h1' | 'h2' | 'h3' | 'h4';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Heading({
	tag: Element,
	children,
	className,
	...props
}: HeadingProps) {
	return (
		<Element className={className} {...props}>
			{children}
		</Element>
	);
}

export const StyledHeading = styled(Heading)`
	font-size: ${({ size, theme }) => theme.fonts[size!]};
	color: ${({ theme }) => theme.colors.white};
`;
