import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export function HeroTopView() {
  
  return (
    <Container className="relative md:pt-40 md:pb-52 overflow-hidden pt-8 pb-20">
      <div className="absolute md:top-10 md:right-0 top-0 z-0 mb-5 lg:w-[800px] lg:h-[600px] md:w-[400px] md:h-[300px] w-[100px] h-[75px]">
        <Image
          src="assets/svg/rocket.svg"
          alt="illustration d'une fusée pour materialiser l'évolution des développeurs front-end"
          fill
          className="my-10"
          priority
        />
      </div>
      <div className="w-full max-w-2xl space-y-5 mt-28 md:mt-0">
        <Typographiy
          variant="h1"
          component="h1"
          className="max-w-lg"
          responsiveVariant="h4"
        >
          Rejoins les singes codeurs !
        </Typographiy>
        <Typographiy
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-xl leading-6 md:leading-normal"
          responsiveVariant="caption4"
        >
          Ici, on se prend pas la tête, mais on code comme des bêtes ! Rejoins
          notre tribu de singes codeurs, partage tes projets les plus fous et
          fais-toi de nouveaux amis développeurs.
        </Typographiy>
        <div className="flex flex-col items-start gap-2 pt-2.5 sm:space-x-5 sm:block">
          <Button
            baseUrl="/connexion/inscription"
            size="medium"
            responsiveSize="small"
          >
            Commencer
          </Button>
          <Button
            baseUrl=""
            variant="secondary"
            size="medium"
            responsiveSize="small"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </Container>
  );
}
