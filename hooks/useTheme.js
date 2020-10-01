import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export const useSizes = () => {
  const { sizes } = useContext(ThemeContext);
  return sizes;
};

export const useColors = () => {
  const { colors } = useContext(ThemeContext);
  return colors;
};
