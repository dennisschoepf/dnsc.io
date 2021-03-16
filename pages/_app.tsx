import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeSelectorProvider } from '../src/context/theme-selector';
import GlobalStyle from '../src/styles/globals';
import regularTheme, { invertedTheme, Themes } from '../src/styles/theme';

export default function App({ Component, pageProps }) {
  const [selectedTheme, setSelectedTheme] = useState<Themes>(Themes.REGULAR);

  const toggleTheme = () => {
    if (selectedTheme === Themes.REGULAR) {
      setSelectedTheme(Themes.INVERTED);
    } else {
      setSelectedTheme(Themes.REGULAR);
    }
  };

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <ThemeSelectorProvider value={{ theme: selectedTheme, toggleTheme }}>
        <ThemeProvider
          theme={
            selectedTheme === Themes.REGULAR ? regularTheme : invertedTheme
          }
        >
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeSelectorProvider>
    </>
  );
}
