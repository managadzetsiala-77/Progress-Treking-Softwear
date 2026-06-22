
export type TPriority = {
   id: number;
    name: string;
    icon: string;
  
}
export type Tstatus = {
id: number;
    name: string;
}
export type TEmployee = {
  id: number;
  name: string;
  surname: string;
  avatar: string | FileList;
  department_id: number;
};
export type TDepartment = {
  id: number;
  name: string;
};
export type TTask = {
  id?: number;
  name: string;
  description: string;
  due_date: string;
  status:Tstatus
  priority: TPriority;
  department: TDepartment;
  employee:TEmployee;
};
export type TTaskForm = {
  
  name: string;
  description: string;
  due_date: string;
  status_id:number;
  priority_id: number;
  employee_id:number;
};

