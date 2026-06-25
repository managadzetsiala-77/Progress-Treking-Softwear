import { useMutation, useQuery } from "@tanstack/react-query";
import { departmentsEndpoint, employeesEndpoint } from "../../config/ApiConfig";
import { createData, getData } from "../../services/appApi";
import type { TDepartment, TEmployee } from "../../app.types";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../../validate/employeeSchema";
import { formatEmployee } from "../../utils/employeeFormater";

export default function EmployeForm({
  onHandleForm,
}: {
  onHandleForm: () => void;
}) {
  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: () => getData(departmentsEndpoint),
  });
  // console.log(departments);
  //shemowmeba tu iqmneba
  // const { data: employees } = useQuery({
  //     queryKey: ["employees"],
  //     queryFn: () => getData(employeesEndpoint),
  //   });

  //   console.log(employees);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(employeeSchema) });

  const mutation = useMutation({
    mutationFn: (data: FormData) => createData(employeesEndpoint, data),
    onSuccess: () => {
      alert("Data has created !");
      reset();
      onHandleForm();
    },
    onError: () => {
      alert("can`t create data!");
    },
  });

  function submit(data: TEmployee) {
    const formatedEmployee = formatEmployee(data);
    mutation.mutate(formatedEmployee);

    reset();
  }

  const avatar = watch("avatar");

  return (
    <>
      <div
        className="w-screen h-screen bg-[rgba(0,0,0,0.1)] backdrop-blur-[5px] fixed top-0 flex justify-center items-center"
        onClick={onHandleForm}
      >
        <form
          onSubmit={handleSubmit(submit)}
          onClick={(e) => e.stopPropagation()}
          className="w-228.25 bg-white pt-10 px-12.5 pb-15 rounded-[10px]"
        >
          <img
            className="ml-auto cursor-pointer"
            src="images/Cancel.svg"
            alt="cencel icon"
            onClick={onHandleForm}
          />
          <h2 className="self-stretch text-center justify-start text-neutral-800 text-3xl font-semibold font-['FiraGO'] mt-9.25 mb-11.25">
            თანამშრომლის დამატება
          </h2>
          <div className="flex flex-col gap-11.25 ">
            <div className="w-full flex gap-11.25">
              <label className="w-full flex flex-col font-medium" htmlFor="">
                სახელი*
                <input
                  className="w-full border border-[#CED4DA] outline-0 rounded-md p-2.5 mb-2 mt-0.75"
                  type="text"
                  id="name "
                  {...register("name")}
                />
                <div className="flex items-center">
                  {errors.name && (
                    <p className="font-normal text-red-500 text-[10px] ">
                      ✓ {errors.name?.message}
                    </p>
                  )}
                </div>
              </label>
              <label className="w-full flex flex-col font-medium" htmlFor="">
                გვარი*
                <input
                  className="w-full border border-[#CED4DA] outline-0 rounded-md p-2.5 mb-2 mt-0.75"
                  type="text"
                  id="name "
                  {...register("surname")}
                />
                <div className="flex items-center">
                  {errors.surname && (
                    <p className="font-normal text-red-500 text-[10px] ">
                      ✓ {errors.surname?.message}
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="justify-start text-neutral-700 text-sm font-medium font-['FiraGO']"
              >
                ავატარი*
              </label>
              <div className="h-30 p-2 flex justify-center items-center border border-dashed border-[#CED4DA] mt-2 rounded ">
                {avatar?.[0] ? (
                  <div className="w-22 h-22 bg-gray-400 rounded-full overflow-hidden relative">
                    <img
                      className="w-full h-full"
                      src={
                        avatar?.[0] instanceof Blob
                          ? `${URL.createObjectURL(avatar[0])}`
                          : ""
                      }
                      alt="avatar"
                    />
                    <img
                      className="absolute bottom-0 left-14  "
                      src="images/Frame.svg"
                      alt=""
                    />
                  </div>
                ) : (
                  <label
                    className="flex flex-col justify-center items-center "
                    htmlFor="avatar"
                  >
                    <img src="images/gallery-export.svg" alt="" />
                    ატვირთე ფოტო
                  </label>
                )}

                <input type="file" id="avatar" hidden {...register("avatar")} />
              </div>
              {errors.avatar && (
                <p className="font-normal text-red-500 text-[10px] mt-3 ">
                  ✓ {errors.avatar?.message}
                </p>
              )}
            </div>
            <label className="flex flex-col items-start" htmlFor="departments">
              დეპარტამენტი*
              <select
                id="departments"
                {...register("department_id")}
                defaultValue={""}
                className="w-91 border border-[#CED4DA] mt-0.75 p-2.5 outline-0 rounded "
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
              {errors.department_id && (
                <p className="font-normal text-red-500 text-[10px] mt-3 ">
                  ✓ {errors.department_id?.message}
                </p>
              )}
            </label>
          </div>
          <div className="mt-9.5 flex justify-end gap-4">
            <button
              type="button"
              className="cursor-pointer border border-[#8338EC] py-2.5 px-4 rounded-[5px]  text-neutral-700 text-base font-normal font-['FiraGO']"
              onClick={() => reset()}
            >
              გაუქმება
            </button>
            <button className="cursor-pointer px-5 py-2.5 rounded-[5px] border border-[#8338EC] bg-[#8338EC] text-white text-lg font-normal font-['FiraGO']">
              დაამატე თანამშრომელი
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
