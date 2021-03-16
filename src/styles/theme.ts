export const colors = {
  background: '#ffffff',
  foreground: '#020202',
};

export const invertedColors = {
  background: '#020202',
  foreground: '#ffffff',
};

export const fonts = {
  reg: '"Archia", "system-ui", "sans-serif"',
};

export const sizes = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '5rem',
  xxxl: '12rem',
};

export const borders = {
  reg: `2px solid ${colors.foreground}`,
};

export enum Themes {
  REGULAR = 'REGULAR',
  INVERTED = 'INVERTED',
}

export const invertedTheme = {
  colors: {
    ...invertedColors,
  },
  fonts,
  sizes,
  borders,
};

export default {
  colors,
  fonts,
  sizes,
  borders,
};
