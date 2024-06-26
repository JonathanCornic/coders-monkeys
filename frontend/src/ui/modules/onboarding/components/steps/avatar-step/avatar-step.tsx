import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { uptadeUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";
import { storage } from "@/config/firebase-config";
import { Container } from "@/ui/components/container/container";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import {
  StorageReference,
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";

export function AvatarStep({
  next,
  prev,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);

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

  const updateUserDocument = async (photoURL: string) => {
    const body = {
      photoURL: photoURL,
    };
    await uptadeUserIdentificationData(authUser.uid, body);
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      body
    );
    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }
    toggle();
    next();
  };

  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;
    if (selectedImage !== null) {
      toggle();
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
          toggle();
          toast.error("Une erreur inconnue est survenue");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateUserDocument(downloadURL);
          });
        }
      );
    } else {
      next();
    }
  };
  return (
    <div className="relative h-screen md:pb-[91px]">
      <div className="h-full overflow-auto flex flex-col justify-center">
        <Container className="lg:grid lg:h-full grid-cols-12 flex-col">
          <div className="relative z-10 flex items-center lg:h-full col-span-6 py-10 md:px-28 lg:px-0">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typographiy variant="h1" component="h1" responsiveVariant="h4">
                Dèrnière étape !
              </Typographiy>
              <Typographiy
                variant="body-base"
                component="p"
                theme="gray"
                className="leading-6 md:leading-normal"
                responsiveVariant="caption3"
              >
                C’est sûr t'as une tête à être sur Coders Monkeys ! Mais on a
                besoin de ta plus belle photo de profil pour que tout le monde
                puisse voir à quel point tu es incroyable. Mettre une photo
                sympa, c'est la garantie de te faire remarquer et de faire
                craquer les développeurs en quête de nouveaux contacts. Alors
                montre-nous ta belle gueule et rejoins la communauté !
              </Typographiy>
            </div>
          </div>
          <div className="flex items-center lg:h-full col-span-6 pt-10">
            <div className="flex w-full justify-center">
              <UploadAvatar
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleImageUpload}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
}
