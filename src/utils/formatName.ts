export function formatDepartmentName(departmentId: number): {
  name: string;
  color: string;
} {
  let name;
  let color;
  switch (departmentId) {
    case 1:
      name = " ადმინ.დეპ";
      color = "bg-[#8338EC]"
      break;
    case 2:
      name = "ადამ.რეს.დეპ";
      color = "bg-[#08A508]"
      break;
    case 3:
      name = "ფინანსური";
      color = "bg-[#FA4D4D]" 
      break;
    case 4:
      name = "მარკეტინგი";
      color = "bg-[#FD9A6A]"
      break;
    case 5:
      name = "ლოგისტიკა";
      color = "bg-[#89B6FF] "
      break;
    case 6:
      name = "ინფ.ტექ.";
      color ="bg-[#FFD86D] "
      break;
    case 7:
      name = "მედია";
      color ="bg-[#FB5607]"
      break;
    default:
      name = "დიზაინი";
      color = "bg-[#FF66A8]";
  }
  return { name, color };
}
