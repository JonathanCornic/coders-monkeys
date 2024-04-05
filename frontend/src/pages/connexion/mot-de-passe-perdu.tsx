import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentication/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />

      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
