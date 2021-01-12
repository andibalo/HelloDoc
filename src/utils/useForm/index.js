import { useState } from "react";

//useForm is a custom hook to est form with multiple fields
//we create a custom hook so it can be reusable
export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    (key, value) => {
      if (key === "reset") {
        return setValues(initialState);
      }

      return setValues({ ...values, [key]: value });
    },
  ];
};
