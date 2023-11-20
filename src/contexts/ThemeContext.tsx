import { ThemeProvider } from "styled-components";
import { theme } from "../styles/shared/Theme";
export default function ThemeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme.lightTheme}>{children}</ThemeProvider>;
}
