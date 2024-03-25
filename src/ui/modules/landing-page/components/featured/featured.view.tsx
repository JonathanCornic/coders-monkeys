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
  const featuredList = featuresData.map((feature) => (
    <div
      key={crypto.randomUUID()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typographiy
        variant="lead"
        component="h3"
        weigth="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typographiy>
      <Typographiy
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typographiy>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="flex flex-col justify-between col-span-5 gap-10">
          <div>
            <Typographiy variant="h2" component="h2" className="mb-5">
              L’endroit le plus cool pour devenir développeur
            </Typographiy>
            <Typographiy
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Du partage, des connexions et des formations notre app gère tout
              ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
            </Typographiy>
            <Button
              variant="secondary"
              baseUrl="/connexion/inscription"
              icon={{ icon: RiArrowRightLine }}
            >
              Commencer
            </Button>
          </div>
          <div>
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
