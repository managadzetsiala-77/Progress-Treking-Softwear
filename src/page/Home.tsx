import { useQuery } from "@tanstack/react-query"
import { getData } from "../services/appApi"
import { tasksEndpoint } from "../config/ApiConfig"
import ToStartTasksList from "../feutures/taska/ToStartTaskList";


export default function Home() {

 const {data: tasks} = useQuery({
  queryKey: ["tasks"], 
  queryFn: () => getData(tasksEndpoint)
 })
console.log(tasks);

  return (
    <div className="grid grid-cols-1 gap-13 p-10 lg:px-30  py-19.75 md:grid-cols-2 xl:grid-cols-4">


<ToStartTasksList  tasks={tasks}/>
    </div>
  )
}
