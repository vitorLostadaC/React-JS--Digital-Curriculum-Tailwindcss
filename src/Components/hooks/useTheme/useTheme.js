import { useEffect, useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "ligth"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeColor = theme === "ligth" ? "dark" : "ligth";

    root.classList.remove(removeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
