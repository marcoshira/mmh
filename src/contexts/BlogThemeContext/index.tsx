import React, { createContext, useCallback, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primaryColor: '#FFFFFF',
            secondaryColor: '#f84600',
            thirdColor: '#df8615',
            white: '#0e0d0d',
            mediumGrey: '#DDDDDD',
            crimson: 'crimson',
            blue: 'rgb(36, 36, 209)',
            navy: '#0A1128',
            black: '#000000',
            pink: 'rgb(231, 171, 181)',
            purple: 'rgb(133, 21, 133)',
            orange: '#df8615',
            green: 'rgb(29, 161, 29)',
            lightBlue: 'rgb(146, 195, 211)',
            yellow: 'rgb(207, 207, 45)',
            brown: 'rgb(116, 45, 45)',
            grey: '#d8d8c0',
            darkGrey: '#7a8370',
            footerPrimaryColor: '#FFFFFF',
            footerWhite: '#df8615',
          },
        };
        setBlogTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
