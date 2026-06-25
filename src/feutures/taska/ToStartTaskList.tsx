import type { TTask } from "../../app.types";
import TaskCard from "./TaskCard";

const borderColor = "border-[#F7BC30]";

export default function ToStartTasksList({ tasks }: {tasks: TTask[]}) {
  return (
    <>
      <div className="flex flex-col gap-7.5 items-center">
        <div className="w-95.25 bg-[#F7BC30] rounded-[10px] text-center py-3.75 text-white font-bold text-[20px]">დასაწყები</div>
        {tasks?.map((task: TTask) => (
        <TaskCard key={task.id} task={task} borderColor={borderColor} />
      ))}
      </div>
    </>
  );h
}