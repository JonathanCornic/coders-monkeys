import { useMobile } from "@/hooks/use-mobile";
import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export function CodersMonkeysSlackView() {
  const { isMobile } = useMobile();
  return (
    <Container className="flex justify-between py-12 md:py-0">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typographiy variant="caption2" component="span" weigth="medium">
            Coders Monkeys
          </Typographiy>
        </div>
        <Typographiy variant={isMobile ? "h5" : "h2"} component="h2">
          Rejoins-nous sur le Slack des Singes codeurs
        </Typographiy>
        <Typographiy
          variant={isMobile ? "caption4" : "body-lg"}
          component="p"
          theme="gray"
          className="max-w-lg leading-6 md:leading-normal"
        >
          Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des
          nouveaux potes !
        </Typographiy>
        <Button baseUrl="https://www.slack.com" linkType={LinkTypes.EXTERNAL} size={isMobile ? "small" : "medium"}>
          Rejoindre le groupe d'aide
        </Button>
      </div>
      {!isMobile && (
        <div className="relative w-[600px] h-[600px]">
          <Image
            fill
            src="assets/svg/logo-slack.svg"
            alt="illustration du logo slack"
          />
        </div>
      )}
    </Container>
  );
}
