import { useState } from "react";
import * as S from "../../styles/header";

export default function Edit() {
  const [isOpen, setIsOpen] = useState(false);

  document.addEventListener("click", (e) => {
    if (e.target instanceof Element)
      if (!e.target.classList.contains("edit-icon")) setIsOpen(false);
  });

  return (
    <S.Edit>
      <S.EditIcon
        className="edit-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        &#8942;
      </S.EditIcon>
      <S.EditOption className={isOpen ? "active" : ""}>
        <li className="edit">Edit Board</li>
        <li className="delete">Delete Board</li>
      </S.EditOption>
    </S.Edit>
  );
}
