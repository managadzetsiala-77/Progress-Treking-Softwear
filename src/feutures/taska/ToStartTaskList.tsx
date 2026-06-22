import type { TTask } from "../../app.types";
import TaskCard from "./TaskCard";

export default function ToStartTasksList({ tasks }: {tasks: TTask[]}) {
  return (
    <>
      {tasks?.map((task: TTask) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}