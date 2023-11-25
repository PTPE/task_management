import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import ThemeContextProvider from "./contexts/ThemeContext";
import * as S from "./styles/page/PageStyle";
export default function App() {
  return (
    <ThemeContextProvider>
      <S.Container>
        <Header />
        <div className="columns">
          <SideBar />
        </div>
      </S.Container>
    </ThemeContextProvider>
  );
}
