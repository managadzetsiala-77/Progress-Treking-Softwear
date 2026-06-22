
import EmployeForm from "./feutures/employees/EmployeForm";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import TaskDetail from "./feutures/taska/TaskDetail";
import CreateTask from "./feutures/taska/CreateTask";
import { useState } from "react";
import AppHeader from "./shared/AppHeader";


export default function App() {
  
  // const {
  //   data: statuses,
  //   error,
  //   isPending,
  // } = useQuery({
  //   queryKey: ["statuses"],
  //   queryFn: () => getData(statusesEndpoint),
  // });
  // console.log(statuses, error, isPending);
  // if (isPending) return "Loading";
  // if (error) return "An error has occurred" + error.message;
  
  const [isOpenForm, setIsOpenForm] = useState(false);
 function handleForm() {

  setIsOpenForm((prev) => !prev);
  
 }
  
  return (
    <div>
<AppHeader onHandleForm={handleForm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskdetails/:id" element={<TaskDetail />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
      {isOpenForm && <EmployeForm  onHandleForm={handleForm} />}
    </div>
  );
}
