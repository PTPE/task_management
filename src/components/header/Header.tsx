import Logo from "./Logo";
import * as S from "../../styles/header";
import Edit from "./Edit";
import { Button } from "../../styles/shared/Button.style";

export default function Header() {
  return (
    <S.Header>
      <Logo />
      <S.BoardName>Platform Launch</S.BoardName>
      <Button>+Add New Task</Button>
      <Edit />
    </S.Header>
  );
}
