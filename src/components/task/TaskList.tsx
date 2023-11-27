import * as S from "../../styles/task";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div>
      <S.ColumnName>
        <S.StatusCircle $color="todo" />
        TODO（1）
      </S.ColumnName>
      <S.TaskList>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </S.TaskList>
    </div>
  );
}
