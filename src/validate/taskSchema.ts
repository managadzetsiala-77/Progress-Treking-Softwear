import * as yup from "yup";

const countWords = (str: string) => {
  if (!str) return 0;
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
};

export const taskSchema = yup.object().shape({
  // სათაური (თქვენს ტიპში "name" ჰქვია)
  name: yup
    .string()
    .required("სათაურის შევსება სავალდებულოა")
    .min(3, "სათაური უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან")
    .max(255, "სათაური არ უნდა აღემატებოდეს 255 სიმბოლოს"),

  // აღწერა
  description: yup
    .string()
    .ensure()
    .max(255, "აღწერა არ უნდა აღემატებოდეს 255 სიმბოლოს")
    .test("min-words", "აღწერა უნდა შეიცავდეს მინიმუმ 4 სიტყვას", function (value) {
      if (!value || value.trim() === "") return true;
      return countWords(value) >= 4;
    }),

  // პრიორიტეტი (ობიექტი)
  priority: yup.string().required("პრიორიტეტის არჩევა სავალდებულოა"),

  // სტატუსი (ობიექტი)
  status: yup.string().required("სტატუსის არჩევა სავალდებულოა"),

  // დეპარტამენტი (ობიექტი)
  department: yup.string().required("დეპარტამენტის არჩევა სავალდებულოა"),

  // პასუხისმგებელი თანამშრომელი (ობიექტი)
  // ჩნდება და სავალდებულო ხდება მხოლოდ მაშინ, როცა დეპარტამენტი არჩეულია
  employee: yup
    .string()
    .required("თანამშრომლის არჩევა სავალდებულოა")
    .when("department", {
      is: (dept: { id: string }) => !!dept && !!dept.id, // ვამოწმებთ არსებობს თუ არა დეპარტამენტის id
      then: (schema) => schema.required("პასუხისმგებელი თანამშრომლის არჩევა სავალდებულოა"),
      // otherwise: (schema) => schema.notRequired(),
    }),

  // დედლაინი ("due_date")
  due_date: yup
    .date()
    .typeError("გთხოვთ მიუთითოთ ვალიდური თარიღი")
    .required("დედლაინის მითითება სავალდებულოა")
    .min(new Date(new Date().setHours(0, 0, 0, 0)), "დედლაინი არ შეიძლება იყოს წარსულში"),
});