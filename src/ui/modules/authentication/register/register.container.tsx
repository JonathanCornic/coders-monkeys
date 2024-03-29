import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { firestoreCreateDocument } from "@/api/firestore";
import { useToggle } from "@/hooks/use-toggle";
import { RegisterFormFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterView } from "./register.view";

export function RegisterContainer() {
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserDocument = async (
    collectionName: string,
    documentID: string,
    document: object
  ) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      documentID,
      document
    );
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }
    toast.success("Bienvenue sur l'app des singes codeurs");
    setIsLoading(false);
    reset();
    sendEmailVerificationProcedure()
  };

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFielsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    const userDocumentData = {
      email,
      how_did_hear,
      uid: data.uid,
      creation_date: new Date(),
    };

    handleCreateUserDocument("users", data.uid, userDocumentData);
  };

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
}
