import { REGISTERED } from "@/lib/session-status";
import { Seo } from "@/ui/components/seo/seo";
import { Session } from "@/ui/components/session/session";
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
  return (
    <>
      <Seo title="onboarding" description="Onboarding" />

      <Session sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Session>
    </>
  );
}
