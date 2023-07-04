import { useState, useEffect } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTheme('dark');
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    theme && localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useDarkMode;
