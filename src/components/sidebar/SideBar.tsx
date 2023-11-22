import * as S from "../../styles/sidebar";
import { ColumnNameStyle } from "../../styles/shared/ColumnNameStyle";
import BoardListItem from "./BoardListItem";
import ThemeToggler from "./ThemeToggler";
import HideSidebar from "./HideSidebar";
import { useState } from "react";
export default function SideBar() {
  const [isHide, setIsHide] = useState(false);

  return (
    <S.Sidebar className={isHide ? "hide" : ""}>
      <ColumnNameStyle>ALL BOARDS（1）</ColumnNameStyle>
      <S.BoardList>
        <BoardListItem className="active">Launch Platform</BoardListItem>
        <BoardListItem className="default">Marketing Plan</BoardListItem>
        <S.AddNewBoard>+Create New Board</S.AddNewBoard>
      </S.BoardList>
      <div className="toggleHide">
        <ThemeToggler />
        <HideSidebar
          onHide={() => setIsHide((prev) => !prev)}
          isHide={isHide}
        />
      </div>
    </S.Sidebar>
  );
}
