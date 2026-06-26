import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getData } from "../../services/appApi";
import { tasksEndpoint } from "../../config/ApiConfig";
import TaskDetailCard from "./TaskDetailCard";
import TaskComments from "./TaskComments";

export default function TaskDetail() {
  const { id: taskId } = useParams();

  const { data: task, isLoading } = useQuery({
    queryKey: ["task"],
    queryFn: () => getData(tasksEndpoint + `/${taskId}`),
  });

  console.log(task);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-2 px-12.5 lg:px-30.25 mt-12.5">
          <TaskDetailCard task={task} />
          <TaskComments />
        </section>
      )}
    </div>
  );
}
