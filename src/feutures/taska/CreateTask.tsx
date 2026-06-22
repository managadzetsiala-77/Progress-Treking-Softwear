import { useForm } from "react-hook-form";
import type {
  TDepartment,
  TEmployee,
  TPriority,
  Tstatus,
  TTask,
  TTaskForm,
} from "../../app.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskSchema } from "../../validate/taskSchema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createData, getData } from "../../services/appApi";
import {
  departmentsEndpoint,
  employeesEndpoint,
  prioritiesEndpoint,
  statusesEndpoint,
  tasksEndpoint,
} from "../../config/ApiConfig";
import { formatDate } from "../../unils/formatDate";
import { useNavigate } from "react-router-dom";


export default function CreateTask() {

 const navigate = useNavigate()

  const { data: priorities } = useQuery({
    queryKey: ["priorities"],
    queryFn: () => getData(prioritiesEndpoint),
  });
  const { data: statuses } = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getData(statusesEndpoint),
  });

  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: () => getData(departmentsEndpoint),
  });

  const { data: employees } = useQuery({
    queryKey: ["employees"],
    queryFn: () => getData(employeesEndpoint),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(taskSchema) });

  const priorityId = watch("priority");
  const departmentId = watch("department");

  const img1 = priorities?.[0]["icon"];
  const img2 = priorities?.[1]["icon"];
  const img3 = priorities?.[2]["icon"];

  // console.log(img1);

  const mutation = useMutation({
    mutationFn: (data: TTaskForm) => createData(tasksEndpoint, data),
    onSuccess: () => {alert("new task created successfully");
      reset()
navigate("/")
    },
  onError: () => 
    alert("Can`t create new Task, try again !!")
  });
    
  function submit(data: TTask) {
    
    // console.log(data);

    const newObj: TTaskForm = {
      
      name: data.name,
      description: data.description,
      due_date: formatDate(data.due_date),
      status_id: +data.status,
      priority_id: +data.priority,
      employee_id: +data.employee,
    };
 console.log(newObj);
 mutation.mutate(newObj)
 
    reset();
  }

  return (
    <div className="px-29.5 py-10">
      <h2 className="text-[34px] font-semibold mb-6.25">
        შექმენი ახალი დავალება
      </h2>

      <form
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40.25 bg-[#FCFBFF] p-13.75 pb-30"
        onSubmit={handleSubmit(submit)}
      >
        <section className="p-5 ">
          <label className="w-full flex flex-col font-medium" htmlFor="name">
            სათაური*
            <input
              className="w-full mb-2 mt-0.75 border border-[#CED4DA]  outline-0 rounded-md p-2.5"
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="font-normal text-[10px] text-red-500">
                ✓ {errors.name?.message}
              </p>
            )}
          </label>
          <label
            className="w-full flex flex-col font-medium my-13.75"
            htmlFor="description"
          >
            აღწერა*
            <textarea
              className="w-full h-43 mb-2 mt-0.75 resize-none border border-[#CED4DA]  outline-0 rounded-md p-2.5"
              id="description"
              {...register("description")}
            />
            {errors.description && (
              <p className="font-normal text-[10px] text-red-500">
                ✓ {errors.description?.message}
              </p>
            )}
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <label
              htmlFor="priority"
              className="w-full relative flex flex-col font-medium"
            >
              პრიორიტეტი *
              {priorityId && (
                <img
                  className="w-6 absolute top-9 left-1"
                  src={
                    priorityId == "1"
                      ? img1
                      : priorityId == "2"
                        ? img2
                        : priorityId == "3"
                          ? img3
                          : ""
                  }
                  alt="icon"
                />
              )}
              <select
                id="priority"
                defaultValue={""}
                {...register("priority")}
                className="w-full border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded pl-8 "
              >
                <option value={""} disabled></option>
                {priorities?.map((priority: TPriority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
              {errors.priority && (
                <p className="font-normal text-[10px] text-red-500">
                  ✓ {errors.priority?.message}
                </p>
              )}
            </label>

            <label
              htmlFor="status"
              className="w-full flex flex-col font-medium"
            >
              სტატუსი *
              <select
                id="status"
                defaultValue={""}
                {...register("status")}
                className="w-full border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded "
              >
                <option value={""} disabled></option>
                {statuses?.map((status: Tstatus) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
              {errors.status && (
                <p className="font-normal text-[10px] text-red-500">
                  ✓ {errors.status?.message}
                </p>
              )}
            </label>
          </div>
        </section>

        <section className="p-5 flex flex-col">
          <label className="flex flex-col items-start" htmlFor="departments">
            დეპარტამენტი*
            <select
              id="departments"
              {...register("department")}
              defaultValue={""}
              className="w-full border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded "
            >
              <option value="" disabled>
                {" "}
                აირჩიე დაპარტამენტი
              </option>
              {departments?.map((department: TDepartment) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="font-normal text-red-500 text-[10px] mt-3 ">
                ✓ {errors.department?.message}
              </p>
            )}
          </label>

          <label
            htmlFor="employee"
            className="w-full relative flex flex-col font-medium mt-17"
          >
            პასუხისმგებელი თანამშრომელი *
            <select
              id="employee"
              defaultValue={""}
              {...register("employee")}
              className="w-full border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded  "
            >
              <option value={""} disabled></option>
              {employees
                ?.filter(
                  (employee: TEmployee) =>
                    +departmentId == employee.department_id,
                )
                .map((employee: TEmployee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              ``````
            </select>
            {errors.employee && (
              <p className="font-normal text-[10px] text-red-500">
                ✓ {errors.employee?.message}
              </p>
            )}
          </label>

          <label
            htmlFor="due_date"
            className="flex flex-col mt-auto py-17 lg:py-0"
          >
            {" "}
            დედლაინი
            <input
              type="date"
              id="due_date"
              className="w-full lg:max-w-[50%]  border border-[#DEE2E6] rounded mt-2 outline-0 p-1"
              {...register("due_date")}
            />
            {errors.due_date && (
              <p className="font-normal text-[10px] text-red-500">
                ✓ {errors.due_date?.message}
              </p>
            )}
          </label>
        </section>
        <span></span>
        <button className="ml-auto size- px-5 py-2.5 bg-violet-600 rounded-[5px] inline-flex justify-center items-center  text-white text-lg font-normal font-['FiraGO']">
          დავალების შექმნა
        </button>
      </form>
    </div>
  );
}
