import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import TaskSection from "./components/task/TaskSection";
import ThemeContextProvider from "./contexts/ThemeContext";
import * as S from "./styles/page/Page.style";
import { GlobalStyle, ResetStyle } from "./styles/theme/GlobalStyle";
export default function App() {
  return (
    <ThemeContextProvider>
      <ResetStyle />
      <GlobalStyle />
      <S.Container>
        <Header />
        <div className="columns">
          <SideBar />
          <TaskSection />
        </div>
      </S.Container>
    </ThemeContextProvider>
  );
}
