import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

export default createGlobalStyle`
@font-face {
  font-family: 'Archia';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/fonts/archia.woff2') format('woff2'), url('/fonts/archia.woff') format('woff'); 
}

/* ibm-plex-sans-700 - latin */
@font-face {
  font-family: 'Archia';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: 
    url('/fonts/archia-semibold.woff2') format('woff2'), url('/fonts/archia-semibold.woff') format('woff');
}
    
html, body {
  font-family: ${fonts.reg};
  background-color: ${colors.background};
  color: ${colors.foreground};
  margin: 0;
}
`;
