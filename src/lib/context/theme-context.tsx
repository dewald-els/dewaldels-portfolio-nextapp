import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext({
  isDark: false,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);

    const handleSchemeChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSchemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSchemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
