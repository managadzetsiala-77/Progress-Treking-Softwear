 export function formatDate(date: string): string {
    const tepDate = new Date(date);

    return `${tepDate.getFullYear()}-${tepDate.getMonth() < 10 ? "0" + (tepDate.getMonth() + 1) : tepDate.getMonth() + 1}-${tepDate.getDate() < 10 ? "0" + tepDate.getDate() : tepDate.getDate()}`;
  }
   export function formatDateToGeo(date: string): string {
    
    const tempDate = new Date(date)
const monthes = ["დეკ", "იანვ", "თებ", "მარტ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოემ"]


    const day = tempDate.getDate() < 10 ? "0" + tempDate.getDate() : tempDate.getDate()
    const year = tempDate.getFullYear()
    const month = tempDate.getMonth()

    return `${day} ${monthes[month]} ${year}`
   }