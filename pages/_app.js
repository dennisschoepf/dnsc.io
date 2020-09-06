import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Cerebri';
    src: url('/fonts/CerebriRegular.otf');
  }

  @font-face {
    font-family: 'CerebriBold';
    src: url('/fonts/CerebriBold.otf');
  }

  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Cerebri', sans-serif;
    font-size: 1.8rem;
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
  fonts: {
    reg: "'Cerebri', sans-serif",
    bold: "'CerebriBold', sans-serif",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
