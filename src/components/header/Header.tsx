import Logo from "./Logo";
import * as S from "../../styles/header";
import Edit from "./Edit";

export default function Header() {
  return (
    <S.Header>
      <Logo />
      <S.BoardName>Platform Launch</S.BoardName>
      <S.AddNewTask>+Add New Task</S.AddNewTask>
      <Edit />
    </S.Header>
  );
}
