import Moon from "../../icons/Moon";
import Sun from "../../icons/Sun";
import { useThemeContext } from "../../contexts/ThemeContext";
import * as S from "../../styles/sidebar";

export default function ThemeToggler() {
  const { handleToggleTheme, themeMode } = useThemeContext()!;

  return (
    <S.ThemeToggler onClick={handleToggleTheme}>
      <Sun />
      <S.ToggleButton $themeMode={themeMode} />
      <Moon />
    </S.ThemeToggler>
  );
}
