import { useMobile } from "@/hooks/use-mobile";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export function HeroTopView() {
  const {isMobile} = useMobile()
  return (
    <Container className="relative md:pt-40 md:pb-52 overflow-hidden pt-8 pb-20">
      <Image
        src="assets/svg/rocket.svg"
        alt="illustration d'une fusée pour materialiser l'évolution des développeurs front-end"
        width={isMobile ? 100 : 811}
        height={isMobile ? 73 : 596}
        className="md:absolute top-0 md:right-0 z-0 mb-5"
        priority
      />
      <div className="w-full max-w-2xl space-y-5">
        <Typographiy
          variant={isMobile ? "h4" : "h1"}
          component="h1"
          className="max-w-lg"
        >
          Rejoins les singes codeurs !
        </Typographiy>
        <Typographiy
          variant={isMobile ? "caption4" : "body-lg"}
          component="p"
          theme="gray"
          className="max-w-xl leading-6 md:leading-normal"
        >
          Ici, on se prend pas la tête, mais on code comme des bêtes ! Rejoins
          notre tribu de singes codeurs, partage tes projets les plus fous et
          fais-toi de nouveaux amis développeurs.
        </Typographiy>
        <div className="flex flex-col items-start gap-2 pt-2.5 sm:space-x-5 sm:block">
          <Button
            baseUrl="/connexion/inscription"
            size={isMobile ? "small" : "medium"}
          >
            Commencer
          </Button>
          <Button
            baseUrl=""
            variant="secondary"
            size={isMobile ? "small" : "medium"}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </Container>
  );
}
