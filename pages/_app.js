import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.8rem;
    width: 100%;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  #SiteWrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#FAFF13',
    blue: '#1D92FF',
    red: '#FF2F2F',
  },
  sizes: {
    xxs: '0.4rem',
    xs: '0.8rem',
    s: '1.2rem',
    m: '1.6rem',
    l: '2.4rem',
    xl: '3.2rem',
    xxl: '4.8rem',
    xxxl: '7.2rem',
  },
  font: "'IBM Plex Sans', sans-serif",
};

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
