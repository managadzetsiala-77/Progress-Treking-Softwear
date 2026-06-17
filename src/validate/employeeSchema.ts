import * as yup from "yup";


const alphaRegex = /^[A-Za-zა-ჰ\s]+$/;
export const employeeSchema = yup.object({
  name: yup
    .string()
    .required("სახელი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო")
    .matches(alphaRegex, "ნებადართულია მხოლოდ ლათინური და ქართული ასოები"),

  surname: yup
    .string()
    .required("გვარი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო")
    .matches(alphaRegex, "ნებადართულია მხოლოდ ლათინური და ქართული ასოები"),

  avatar: yup
    .mixed<FileList>()
    .required("სურათი სავალდებულოა")
    .test("required", "სურათი სავალდებულოა", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "ფაილის ზომა არ უნდა აღემატებოდეს 600KB-ს", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 600 * 1024; // 600KB in bytes
    })
    .test("fileType", "გთხოვთ ატვირთოთ მხოლოდ სურათის ფორმატი", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].type.startsWith("image/");
    }),

  department_id: yup
    .string() // Select values are submitted as strings from HTML elements
    .required("დეპარტამენტის არჩევა სავალდებულოა"),
});