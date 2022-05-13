import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;
		colors: {
			primary: string;
			secondary: string;
			lightGreen: string;
			white: string;
			
		};
		fonts: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}
