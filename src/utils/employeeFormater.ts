import type { TEmployee } from "../app.types";

export function formatEmployee(data: TEmployee) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("surname", data.surname);
  formData.append("avatar", data.avatar[0]);
  formData.append("department_id", String(data.department_id));

  return formData;
}
