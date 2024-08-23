import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  console.log(theme); 
  return (
    <div>
    <label className="switch">
      <input 
        type="checkbox" 
        className="input__check" 
        onChange={toggleTheme} 
        checked={theme === 'dark'} 
      />
      <span className="slider"></span>
    </label>

     
  </div>
  );
};

export default ThemeToggle;
