import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";

export function ProfileStep({
  next,
  prev,
  isFirstStep,
  isFinalStep,
}: BaseComponentProps) {
  return (
    <div className="relative h-screen">
      profile-step
      <OnboardingFooter
        next={next}
        prev={prev}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
}
