import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-full h-full text-yellow-500 dark:text-yellow-400 transition-all duration-500 transform ${
            isDark ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-full h-full text-blue-500 dark:text-blue-300 transition-all duration-500 transform ${
            isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
          }`} 
        />
      </div>
      <span className="absolute inset-0 rounded-full ring-2 ring-gray-200 dark:ring-white/20 group-hover:ring-gray-300 dark:group-hover:ring-white/40 transition-all duration-300"></span>
    </button>
  );
};
