 export function formatDate(date: string): string {
    const tepDate = new Date(date);

    return `${tepDate.getFullYear()}-${tepDate.getMonth() < 10 ? "0" + (tepDate.getMonth() + 1) : tepDate.getMonth() + 1}-${tepDate.getDate() < 10 ? "0" + tepDate.getDate() : tepDate.getDate()}`;
  }