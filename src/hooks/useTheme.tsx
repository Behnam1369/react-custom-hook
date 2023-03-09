import { useCallback, useState } from "react";
const defaultTheme = "light";

function useTheme() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || defaultTheme
  );

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  return { theme, toggleTheme };
}

export default useTheme;
