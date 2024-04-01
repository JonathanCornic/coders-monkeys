import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";

export function WelcomeStep({
  next,
  isFirstStep,
  isFinalStep,
}: BaseComponentProps) {
  return (
    <div className="relative h-screen">
      welcome-step
      <OnboardingFooter
        next={next}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
}
