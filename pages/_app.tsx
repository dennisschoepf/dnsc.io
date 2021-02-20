import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globals';
import theme from '../src/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
