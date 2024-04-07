import { uptadeUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";
import { storage } from "@/config/firebase-config";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { UserAcountFormFieldsType } from "@/types/forms";
import {
  StorageReference,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserAccountView } from "./user-account.view";

export function UserAccountContainer() {
  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm<UserAcountFormFieldsType>();

  const { displayName, biography, expertise, linkedin, github } =
    authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: (
      | "displayName"
      | "biography"
      | "expertise"
      | "linkedin"
      | "github"
    )[] = ["displayName", "biography", "expertise", "linkedin", "github"];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        let imageDataUrl: string | ArrayBuffer | null = null;
        if (e.target) {
          imageDataUrl = e.target.result;
        }
        setImagePreview(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;
    if (selectedImage !== null) {
      setIsLoading(true);
      storageRef = ref(
        storage,
        `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
      );
      uploadTask = uploadBytesResumable(storageRef, selectedImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setIsLoading(false);
          toast.error("Une erreur inconnue est survenue");
          setUploadProgress(0);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updatUserAvatar(downloadURL);
            setSelectedImage(null);
            setTimeout(() => {
              setUploadProgress(0);
            }, 1000);
          });
        }
      );
    }
  };
  const updatUserAvatar = async (photoURL: string) => {
    const data = {
      photoURL: photoURL,
    };

    await uptadeUserIdentificationData(authUser.uid, data);
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      data
    );
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    reloadAuthUserData()
    setIsLoading(false);
  };

  const handleUpdateUserDocument = async (
    formData: UserAcountFormFieldsType
  ) => {
    setIsLoading(true);

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    setIsLoading(false);
    toast.success("Ton profil a été mis à jour !");
  };

  const onSubmit: SubmitHandler<UserAcountFormFieldsType> = async (
    formData
  ) => {
    if (selectedImage) {
      handleImageUpload();
    }

    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      setError("linkedin", {
        type: "manual",
        message: "Cette url ne correspond pas à un profil linkedin",
      });
      return;
    }
    if (formData.github && !formData.github.includes("github.com/")) {
      setError("github", {
        type: "manual",
        message: "Cette url ne correspond pas à un profil github",
      });
      return;
    }
    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography ||
      linkedin !== formData.linkedin ||
      github !== formData.github
    ) {
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const data = {
          displayName: formData.displayName,
        };
        const { error } = await uptadeUserIdentificationData(
          authUser.uid,
          data
        );

        if (error) {
          setIsLoading(false);
          toast.error(error.message);
          return;
        }
        reloadAuthUserData()
      }

      for (const key in formData) {
        if (
          formData.hasOwnProperty(key) &&
          formData[key as keyof UserAcountFormFieldsType] === undefined
        ) {
          delete formData[key as keyof UserAcountFormFieldsType];
        }
      }
      handleUpdateUserDocument(formData);
      return;
    }

    return;
  };
  return (
    <div className="">
      <UserAccountView
        imagePreview={imagePreview}
        uploadProgress={uploadProgress}
        handleImageSelect={handleImageSelect}
        form={{ errors, control, register, handleSubmit, onSubmit, isLoading }}
      />
    </div>
  );
}
