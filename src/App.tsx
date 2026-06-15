import { useQuery } from "@tanstack/react-query";
import { getData } from "./services/appApi";
import EmployeForm from "./feutures/employees/EmployeForm";

export default function App() {
  const {
    data: statuses,
    error,
    isPending,
  } = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getData("/statuses"),
  });
  console.log(statuses, error, isPending);
if (isPending) return "Loading"
if(error) return "An error has occurred" + error.message
  return <div>

    <EmployeForm />
  </div>;
}
