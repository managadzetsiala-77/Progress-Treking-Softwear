import { useQuery } from "@tanstack/react-query";
import { getData } from "./services/appApi";
import EmployeForm from "./feutures/employees/EmployeForm";
import { statusesEndpoint } from "./config/ApiConfig";

export default function App() {
  const {
    data: statuses,
    error,
    isPending,
  } = useQuery({
    queryKey: ["statuses"],
    queryFn: () => getData(statusesEndpoint),
  });
  console.log(statuses, error, isPending);
  if (isPending) return "Loading";
  if (error) return "An error has occurred" + error.message;
  return (
    <div>
      <EmployeForm />
    </div>
  );
}
