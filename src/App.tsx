import Header from "./components/header/Header";
import ThemeContext from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContext>
      <Header />
    </ThemeContext>
  );
}
