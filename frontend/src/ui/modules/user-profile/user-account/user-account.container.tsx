import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserAccountView } from "./user-account.view";
import { UserAcountFormFieldsType } from "@/types/forms";

export function UserAccountContainer() {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm<UserAcountFormFieldsType>();

  const handleUpdateUserDocument = async (formData: UserAcountFormFieldsType) => {
    setIsLoading(true)
    console.log(formData);
    setIsLoading(false)
    
  }
  const onSubmit: SubmitHandler<UserAcountFormFieldsType> = async (formData) => {
    handleUpdateUserDocument(formData)
    return
  }
  return (
    <div className="">
      <UserAccountView form={{errors, control, register, handleSubmit, onSubmit, isLoading}}/>
    </div>
  );
}
