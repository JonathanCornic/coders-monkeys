import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { Container } from "@/ui/components/container/container";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";

export function WelcomeStep({
  next,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) {

  return (
    <div className="relative h-screen md:pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative  flex items-center h-full col-span-12 py-10 lg:col-span-6">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typographiy variant="h1" component="h1" responsiveVariant="h4">
                Bienvenue sur l’appli des singes codeurs !
              </Typographiy>
              <Typographiy
                variant="body-base"
                component="p"
                theme="gray"
                responsiveVariant="caption3"
                className="leading-6 md:leading-normal"
              >
                BViens traîner avec des développeurs aussi fous que toi, montre
                tes projets persos et reçois des feedbacks constructifs (ou
                fais-toi carrément descendre). Prêt à créer des trucs
                incroyables ?
              </Typographiy>
            </div>
          </div>
          <div className="lg:flex items-center h-full col-span-6 hidden">
            <div className="w-full">
              <Image
                src="assets/svg/rocket.svg"
                alt="illustration d'une fusée pour materialiser l'évolution des développeurs front-end"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        next={next}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
}
