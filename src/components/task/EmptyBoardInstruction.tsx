import { Button } from "../../styles/shared/Button";
import * as S from "../../styles/task";

export default function EmptyBoardInstruction() {
  return (
    <S.EmptyBoardInstruction>
      <p className="empty board">
        This board is empty. Create a new column to get started.
      </p>
      <Button>+ Add New Column</Button>
    </S.EmptyBoardInstruction>
  );
}
