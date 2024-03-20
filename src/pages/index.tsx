import { Seo } from "@/ui/components/seo";
import { Typographiy } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <div className="space-y-5">
        <Typographiy variant="display" component="h1" theme="primary" weigth="medium">
          Coders Monkeys
        </Typographiy>
      </div>
    </>
  );
}
