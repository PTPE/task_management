import FileIcon from "../../icons/File";
import * as S from "../../styles/sidebar";

type BoardListItemType = {
  children: React.ReactNode;
  className: "active" | "default";
};

export default function BoardListItem(props: BoardListItemType) {
  return (
    <S.BoardListItem className={props.className}>
      <FileIcon type={props.className} />
      {props.children}
    </S.BoardListItem>
  );
}
