import * as Yup from "yup";

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const website = /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const validationSchema = Yup.object({
    pizzeria: Yup.string()
      .max(200, "Must be less than 200 characters")
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    street: Yup.string()
      .max(400, "Must be less than 400 characters")
      .min(3, "Must be at least 3 characters"),
    city: Yup.string()
      .max(400, "Must be less than 400 characters")
      .min(3, "Must be at least 3 characters"),
    state: Yup.string()
      .max(2, "Must be exactly 2 characters")
      .min(2, "Must be exactly 2 characters"),
    zip_code: Yup.string()
      .max(5, "Must be exactly 5 numbers")
      .min(5, "Must be exactly 5 numbers"),
    website: Yup.string().matches(website, "Enter correct url"),
    phone_number: Yup.string().matches(phone, "Phone number is not valid"),
    description: Yup.string().max(500, "Must be less than 400 characters"),
    email: Yup.string().email("Not a valid email"),
  });

  export default validationSchema;