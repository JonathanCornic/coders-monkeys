import { useMobile } from "@/hooks/use-mobile";
import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

interface FeatuesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}
const featuresData: FeatuesListInterface[] = [
  {
    imagePath: "/assets/svg/diskette.svg",
    imageAlt: "illustration d'une disquette",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "illustration d'une manette de jeu vidéo",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "illustration d'un apareil photo",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités !",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "illustration d'une boussole",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière !",
  },
];

export function FeaturedView() {
  const { isMobile } = useMobile();

  const featuredList = featuresData.map((feature) => (
    <div
      key={crypto.randomUUID()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-12 h-12 md:w-32 md:h-32 md:rounded-full mb-6 md:p-5 overflow-hidden">
        {!isMobile && (
          <Image
            fill
            src={feature.imagePath}
            alt={feature.imageAlt}
            className="object-scale-down blur-2xl"
          />
        )}
        <Image
          width={isMobile ? 50 : 92}
          height={isMobile ? 50 : 92}
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>
      <Typographiy
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
        responsiveVariant="body-base"
      >
        {feature.title}
      </Typographiy>
      <Typographiy
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center leading-5 md:leading-normal"
        responsiveVariant="caption4"
      >
        {feature.description}
      </Typographiy>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className="lg:grid grid-cols-12 py-20 xl:gap-24 md:gap-20 md:py-24 gap-5 flex flex-col-reverse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 col-span-12 md:col-span-7">
          {featuredList}
        </div>

        <div className="flex flex-col justify-between col-span-12 md:col-span-5 gap-10">
          <div className="text-center md:text-start">
            <Typographiy
              variant="h2"
              component="h2"
              className="mb-5"
              responsiveVariant="h5"
            >
              L’endroit le plus cool pour devenir développeur
            </Typographiy>
            <Typographiy
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8 leading-6 md:leading-normal"
              responsiveVariant="caption4"
            >
              Du partage, des connexions et des formations notre app gère tout
              ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
            </Typographiy>
            <Button
              size="medium"
              variant="secondary"
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
              responsiveSize="small"
            >
              Commencer
            </Button>
          </div>
          <div className="mx-auto text-center md:mx-0 md:text-start">
            <Typographiy
              variant="caption3"
              component="div"
              theme="gray"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typographiy>
            <SocialNetworksButtons />
          </div>
        </div>
      </Container>
    </div>
  );
}
