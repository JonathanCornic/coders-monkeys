import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { ProfileStepForm } from "./profile-step-form";

export function ProfileStep({
  next,
  prev,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) {
  const { value: isLoading, setValue: setLoading } = useToggle();
  const { authUser } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  //Display value is exist...
  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "expertise",
      "biography",
    ];
    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFieldsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    next();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setLoading(true);
    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.biography
    ) {
      handleUpdateUserDocument(formData);
    }
    setLoading(false)
    next();
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
                Présente-toi !
              </Typographiy>
              <Typographiy
                variant="body-base"
                component="p"
                theme="gray"
                className="leading-6 md:leading-normal"
                responsiveVariant="caption3"
              >
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment t'as atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typographiy>
            </div>
          </div>
          <div className="flex items-center lg:h-full col-span-6 pt-10">
            <div className="flex lg:justify-end w-full justify-center">
              <ProfileStepForm
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prev={prev}
        next={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  );
}
