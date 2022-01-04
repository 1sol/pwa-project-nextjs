import { ThemeProvider } from 'styled-components';
import '../styles/module/reset.css';
import '../styles/antd.less';
import theme from '../utils/theme';
import { GlobalStyle } from '../styles/global-styles';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
