export function getPriorityColor(priorityId: number): string {
  return priorityId == 2
    ? "border-[#FFBE0B] text-[#FFBE0B] "
    : priorityId == 3
      ? "border-[#FA4D4D] text-[#FA4D4D]"
      : "border-[#08A508] text-[#08A508]";
}
  