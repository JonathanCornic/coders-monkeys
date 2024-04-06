import { LinkTypes } from "@/lib/link-type";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const CallsToActionSideBarContribution = () => {
  return (
    <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg bg-primary">
      <Typographiy
        variant="lead"
        theme="white"
        weight="medium"
        className="text-center"
        responsiveVariant="body-base"
      >
        Récompense mes efforts
      </Typographiy>
      <div className="flex justify-center">
        <Button
          variant="success"
          baseUrl="https://google.com"
          linkType={LinkTypes.EXTERNAL}
          responsiveSize="small"
        >
          Faire un don libre
        </Button>
      </div>
      <div className="w-40 h-40 absolute -bottom-5 transform -translate-x-1/2 left-1/2">
        <Image
          fill
          src="/assets/svg/pig.svg"
          alt="image d'un cochon tirelire"
          className=""
        />
      </div>
    </div>
  );
};
