import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './theme';

export default createGlobalStyle`
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('IBM Plex Sans'), local('IBMPlexSans'),
    url('/fonts/ibm-plex-sans-v8-latin-regular.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/ibm-plex-sans-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* ibm-plex-sans-700 - latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),
    url('/fonts/ibm-plex-sans-v8-latin-700.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/ibm-plex-sans-v8-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
    
html, body {
  font-family: ${fonts.reg};
  background-color: ${colors.background};
  color: ${colors.foreground};
}
`;
