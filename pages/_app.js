import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlobalStyles = createGlobalStyle`
  ${reset}

  /* ibm-plex-sans-regular - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url('../public/fonts/ibm-plex-sans-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../public/fonts/ibm-plex-sans-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* ibm-plex-sans-700 - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),
        url('../public/fonts/ibm-plex-sans-v8-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../public/fonts/ibm-plex-sans-v8-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

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
    font-size: 2rem;
    line-height: 2.8rem;
    width: 100%;
    height: 100%;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  #SiteWrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 100%;
  }
`;

const theme = {
  colors: {
    white: '#ffffff',
    black: '#151515',
    grey: '#5f5f5f',
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
  borderRadius: '0.5rem',
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
