import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export const useFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      // Update favicon based on theme
      if (theme === 'dark') {
        favicon.href = '/darklogo1.png';
      }
    }
  }, [theme]);
};
