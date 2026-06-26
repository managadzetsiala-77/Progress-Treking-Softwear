import { useQuery } from "@tanstack/react-query";
import type { Tstatus, TTask } from "../../app.types";
import { formatDepartmentName } from "../../utils/formatName";
import { getPriorityColor } from "../../utils/getColor";
import { getData } from "../../services/appApi";
import { statusesEndpoint } from "../../config/ApiConfig";
import { formatDateForDetail } from "../../utils/formatDate";

export default function TaskDetailCard({ task }: { task: TTask }) {
  const { data: statuses } = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getData(statusesEndpoint),
  });

  const { name: departmentName, color } = formatDepartmentName(
    task.department.id,
  );
  return (
    <div>
      <section className="flex items-center gap-2.5 text-[12px]">
        <span
          className={`w-26.5 flex gap-1 items-center font-bold border rounded-[5px] p-1 ${getPriorityColor(task.priority.id)}`}
        >
          <img src={task.priority?.icon} alt="" /> {task.priority.name}
        </span>
        <span
          className={`${color} text-white w-[88px] px-2.25 py-1.25 rounded-[15px] text-center`}
        >
          {departmentName}
        </span>
      </section>
      <section className="px-2.5 mt-3 mb-18.25">
        <h3 className="text -[34px] font-bold mb-3">{task.name} </h3>
        <p className="text-[18px] font-normal mt-6.5 mb-18.25">
          {task.description}
        </p>
      </section>

      <section className=" w-123.25">
        <h2 className="text-zinc-800 text-2xl font-medium font-['FiraGO'] mb-6.25 ">
          დავალების დეტალები
        </h2>

        <div className="grid grid-cols-2">
          <h3 className="flex items-center gap-1.5"><img src="/images/status.svg" alt="" /> სტატუსი</h3>
          <select className="border border-[#CED4DA] rounded-[5px] p-3.5 outline-0">
            <option value={task.status.id}>{task.status.name}</option>
            {statuses?.filter((status:Tstatus) => status.id !== task.status.id).map((status: Tstatus) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 my-10">
            <h3 className="flex items-center gap-1.5"><img src="/images/user.svg" alt="" />  თანამშრომელი</h3>
            <div className="flex gap-3">
                <img className="w-8 h-8 rounded-full"  src={`${task.employee.avatar}`} alt="avatar" />
            <div>
                <h3 className="text-zinc-700 text-xs font-light font-['FiraGO']">{task.department.name}</h3>
                <h3 className="text-[14px] font-bold">{task.employee.name}</h3>
            </div>
            </div>
        </div>
        <div className="grid grid-cols-2">
            <h3 className="flex items-center gap-1.5"><img className="w-5 h-5" src="/images/calendar.svg" alt="" /> დავალების ვადა</h3>
            <h3>{formatDateForDetail(task.due_date)}</h3>
        </div>
      </section>
    </div>
  );
}
