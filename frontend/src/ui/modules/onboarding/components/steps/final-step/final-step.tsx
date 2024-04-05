import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { OnboardingFooter } from "../../footer/onboarding-footer";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
  const { authUser, reloadAuthUserData } = useAuth();
  const { value: isLoading, toggle } = useToggle();

  const handleCloseOnboarding = async () => {
    toggle();
    const data = { onboardingIsCompleted: true };
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      data
    );
    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }
    reloadAuthUserData()
    toggle();
  };

  return (
    <>
      <div className="relative h-screen md:pb-[91px]">
        <div className="h-full overflow-auto flex flex-col justify-center">
          <Container className="flex justify-center">
            <div className="w-full max-w-xl space-y-5 pb-4.5 flex flex-col items-center">
              <div>
                <Logo size="large" />
              </div>
              <Typographiy variant="h1" component="h1" responsiveVariant="h4">
                Félicitations!
              </Typographiy>
              <Typographiy
                variant="body-base"
                component="p"
                theme="gray"
                className="leading-6 md:leading-normal text-center"
                responsiveVariant="caption3"
              >
                Tu fais maintenant partie de la tribu des singes codeurs ! Nous
                sommes ravis de t'accueillir parmi nous. Tu vas pouvoir te
                lancer dans l'aventure, partager tes projets les plus fous et
                rencontrer des développeurs aussi passionnés que toi. Alors
                prépare-toi, car notre communauté est prête à te secouer les
                branches et à te faire grimper au sommet de l'arbre du
                développement web !
              </Typographiy>
            </div>
          </Container>
        </div>
        <OnboardingFooter
          next={handleCloseOnboarding}
          isFinalStep={isFinalStep}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
