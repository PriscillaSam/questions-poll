import styled from 'styled-components';
import { Heading } from 'components';

export function Spinner() {
	return (
		<SpinnerContainer>
			<svg viewBox="25 25 50 50">
				<circle cx="50" cy="50" r="20"></circle>
			</svg>

			<Heading size="lg" tag="h1">
				Loading...
			</Heading>
		</SpinnerContainer>
	);
}

const SpinnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.primary};

	svg {
		width: 3.75em;
		margin-bottom: 50px;
		display: inline-block;
		vertical-align: middle;
		transform-origin: center;
		animation: rotate 2s linear infinite;

		circle {
			fill: none;
			stroke: ${({ theme }) => theme.colors.lightGreen};
			stroke-width: 3;
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
			stroke-linecap: round;
			animation: dash 1.5s ease-in-out infinite;
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dashoffset: -125px;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`;
