import { useNavigate } from "react-router-dom";
import type { TTask } from "../../app.types";
import { formatDateToGeo } from "../../utils/formatDate";
import { formatDepartmentName } from "../../utils/formatName";
import { getPriorityColor } from "../../utils/getColor";

export default function TaskCard({
  task,
  borderColor,
}: {
  task: TTask;
  borderColor: string;
}) {

  const {name: departmentName, color} = formatDepartmentName(task.department.id);

const navigate =useNavigate()

  return (
    <div
    onClick={() => navigate(`/taskdetails/${task.id}`)}
      className={`border ${borderColor} p-5 rounded -[15px] flex flex-col gap-7 w-95.25 h-57`}
    >
      <section className="flex gap-2.5 items-center text-[12px]">
        <span className={`flex gap-1 items-center font-bold border rounded-[5px] p-1 ${getPriorityColor(task.priority.id)}`}>
         <img src={task.priority.icon} alt="" /> {task.priority.name}
        </span>
        <span className={`${color} text-white w-22 px-2.25 py-1.25 rounded-[15px] text-center`}>{departmentName}</span>
        <span className="ml-auto"> {formatDateToGeo(task.due_date)} </span>
      </section>

      <section className="px-2.5">
        <h3 className="text -[15px] font-bold mb-3">{task.name} </h3>
        <p className="text-[14px] font-normal">{task.description.substring(0, 50)}</p>
      </section>

      <section className="flex justify-end gap-1 items-center">
        <img
          className="rounded-full w-7.75 h-7.75 mr-auto"
          src={`${task.employee.avatar}`}
          alt=""
        />
        <img className="w-5.5 h-5.5" src="images/coments.svg" alt="comments" />
        <span>8</span>
      </section>
    </div>
  );
}
