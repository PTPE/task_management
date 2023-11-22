import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import ThemeContextProvider from "./contexts/ThemeContext";
export default function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <SideBar />
    </ThemeContextProvider>
  );
}
