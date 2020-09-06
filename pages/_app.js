import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#FAFF13',
    blue: '#1D92FF',
    red: '#FF2F2F'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
