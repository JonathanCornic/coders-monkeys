import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export function HeroTopView() {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typographiy variant="h1" component="h1" className="max-w-lg">
          Rejoins les singes codeurs !
        </Typographiy>
        <Typographiy
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-xl"
        >
          Ici, on se prend pas la tête, mais on code comme des bêtes ! Rejoins
          notre tribu de singes codeurs, partage tes projets les plus fous et
          fais-toi de nouveaux amis développeurs.
        </Typographiy>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="/connexion/inscription">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
      <Image
        src="assets/svg/rocket.svg"
        alt="illustration d'une fusée pour materialiser l'évolution des développeurs front-end"
        width={811}
        height={596}
        className="absolute top-0 right-0 z-0"
      />
    </Container>
  );
}
