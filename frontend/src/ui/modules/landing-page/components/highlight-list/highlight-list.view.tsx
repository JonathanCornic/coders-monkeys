
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function HighlightListView() {

  return (
    <Container className="md:py-24 py-12 space-y-10">
      <div className="flex md:flex-row md:text-start justify-center md:gap-24 gap-10 flex-col items-center text-center">
        <div className="relative md:mt-10 md:w-[520px] md:h-[350px] w-[150px] h-[101px]">
          <Image
            fill
            src="assets/svg/cake.svg"
            alt="illustration d'un gateau ..."
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typographiy variant="h3" component="h2" responsiveVariant="h5">
            De novice à développeur en un clin d'œil !
          </Typographiy>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <ListPoint>Progresse rapidement.</ListPoint>
            <ListPoint>Inspire-toi.</ListPoint>
            <ListPoint>Gagne de l’assurance.</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
              size="medium"
              responsiveSize="small"
            >
              Let's go
            </Button>
            <Image
              width={25}
              height={27}
              src="assets/svg/cursor.svg"
              alt="curseur de la sourie"
              className="absolute right-7 -bottom-5"
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse md:text-start justify-center md:gap-24 gap-10 flex-col items-center text-center">
        <div className="relative md:mt-10 md:w-[520px] md:h-[350px] w-[150px] h-[101px]">
          <Image
            fill
            src="assets/svg/toupie.svg"
            alt="illustration d'une toupie ..."
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typographiy variant="h3" component="h2" responsiveVariant="h5">
            Booste ta carrière de développeur
          </Typographiy>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <ListPoint>Partage tes projets, obtiens des feedbacks.</ListPoint>
            <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
            <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              variant="secondary"
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
              size="medium"
              responsiveSize="small"
            >
              Démarrer
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

interface Props {
  children: React.ReactNode;
}
function ListPoint({ children }: Props) {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine
        size={24}
        className="mt-0.5 text-secondary hidden md:block"
      />

      <Typographiy
        variant="body-lg"
        component="span"
        className="leading-6 md:leading-normal"
        responsiveVariant="caption3"
      >
        {children}
      </Typographiy>
    </div>
  );
}
