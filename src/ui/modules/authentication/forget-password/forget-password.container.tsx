import { FogetPasswordFormFielsType } from "@/types/forms";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";

export function ForgetPasswordContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<FogetPasswordFormFielsType>();

  const onSubmit: SubmitHandler<FogetPasswordFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);
    console.log("formData", formData);
  };
  return (
    <>
      <ForgetPasswordView
        form={{ errors, register, handleSubmit, onSubmit, isLoading }}
      />
    </>
  );
}
