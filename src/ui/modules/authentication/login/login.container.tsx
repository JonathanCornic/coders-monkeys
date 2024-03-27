import { LoginFormFielsType } from "@/types/forms";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";

import { firebaseSignInUser } from "@/api/authentication";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function LoginContainer() {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);

        // ...
      } else {
        // User is signed out
        // ...
        console.log("not a user connected");
      }
    });
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur Coders Monkeys");
    setIsLoading(false);
    reset()
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "Ton mon de passe doit comporter au minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleSignInUser(formData);
  };

  return (
    <>
      <LoginView
        form={{ errors, register, handleSubmit, onSubmit, isLoading }}
      />
    </>
  );
}
