import { RegisterFormFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { useState } from "react";

export function RegisterContainer() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true)
    console.log("formData", formData);
  };

  return (
    <>
      <RegisterView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
    </>
  );
}
