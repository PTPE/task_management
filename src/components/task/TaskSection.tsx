import * as S from "../../styles/task";
import AddNewColumn from "./AddNewColumn";
import TaskList from "./TaskList";

export default function TaskSection() {
  return (
    <S.TaskSection>
      <TaskList />
      <TaskList />
      <TaskList />
      <TaskList />
      <AddNewColumn />
    </S.TaskSection>
  );
}
