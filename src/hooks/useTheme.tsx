import { useState } from "react";

export default function useToggleTheme() {
  const [theme, setTheme] = useState("lightTheme");

  function handleToggleTheme() {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  }
  return { handleToggleTheme, theme };
}
