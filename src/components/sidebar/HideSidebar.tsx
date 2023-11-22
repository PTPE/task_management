import Eye from "../../icons/Eye";
import Hide from "../../icons/Hide";
import * as S from "../../styles/sidebar";
type HideSidebarType = {
  onHide: () => void;
  isHide: boolean;
};

export default function HideSidebar(props: HideSidebarType) {
  console.log(props.isHide);

  if (!props.isHide)
    return (
      <S.Hide onClick={props.onHide}>
        <Hide />
        &nbsp; Hide Sidebar
      </S.Hide>
    );
  return (
    <S.Hide className="hide" onClick={props.onHide}>
      <Eye />
    </S.Hide>
  );
}
