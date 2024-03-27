import { sendEmailToResetPassword } from "@/api/authentication";
import { useToggle } from "@/hooks/use-toggle";
import { FogetPasswordFormFielsType } from "@/types/forms";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgetPasswordView } from "./forget-password.view";

export function ForgetPasswordContainer() {
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FogetPasswordFormFielsType>();

  const handleResetPassword = async ({ email }: FogetPasswordFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un e-mail a été expédié à l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<FogetPasswordFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };

  return (
    <>
      <ForgetPasswordView
        form={{ errors, register, handleSubmit, onSubmit, isLoading }}
      />
    </>
  );
}
