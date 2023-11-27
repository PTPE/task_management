import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/Theme";
import { createContext, useContext, useState } from "react";

type ThemeCtxType = {
  handleToggleTheme: () => void;
  themeMode: string;
};

type ThemeMode = "lightTheme" | "darkTheme";

const ThemeCtx = createContext<ThemeCtxType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("lightTheme");

  function handleToggleTheme() {
    themeMode === "lightTheme"
      ? setThemeMode("darkTheme")
      : setThemeMode("lightTheme");
  }
  const ctxValue = { handleToggleTheme, themeMode };

  return (
    <ThemeCtx.Provider value={ctxValue}>
      <ThemeProvider theme={theme[themeMode]}>{children}</ThemeProvider>
    </ThemeCtx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext() {
  const context = useContext(ThemeCtx);

  if (context === undefined)
    throw new Error("useThemeContext was used outside the ThemeContext");

  return context;
}
