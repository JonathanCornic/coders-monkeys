import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

export default function Onboarding() {
  return (
    <>
      <Seo title="onboarding" description="Onboarding" />

      <Layout sessionStatus={REGISTERED}>
        <div className="flex items-center justify-center py-40 pt-20">onboarding</div>
      </Layout>
    </>
  );
}
