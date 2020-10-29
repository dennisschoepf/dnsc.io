import styled, { ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalStyles, { theme } from '../components/GlobalStyles';

const SiteWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: stretch;
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SiteWrapper>
        <GlobalStyles />
        <Navbar />
        <div id="SiteWrapper">
          <Component {...pageProps} />
        </div>
        <Footer />
      </SiteWrapper>
    </ThemeProvider>
  );
}
