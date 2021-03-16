import React, { useContext, useState } from 'react';
import regularTheme, { invertedTheme, Themes } from '../styles/theme';

interface ThemeSelector {
  theme: Themes;
  toggleTheme: () => void;
}

const ThemeSelectorContext = React.createContext<ThemeSelector>({
  theme: Themes.REGULAR,
  toggleTheme: () => {},
});

export function useThemeSelector() {
  const context = useContext(ThemeSelectorContext);

  if (!context) throw Error('No ThemeSelectorProvider');

  return context;
}

export function ThemeSelectorProvider({ children, value }) {
  return (
    <ThemeSelectorContext.Provider value={value}>
      {children}
    </ThemeSelectorContext.Provider>
  );
}
