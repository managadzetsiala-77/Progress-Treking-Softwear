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
    <div>


<ToStartTasksList  tasks={tasks}/>
    </div>
  )
}
