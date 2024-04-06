import { LinkTypes } from "@/lib/link-type";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const CallsToActionSideBarGroup = () => {
  return (
    <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg bg-secondary">
      <Typographiy
        variant="lead"
        theme="white"
        weight="medium"
        className="text-center"
        responsiveVariant="body-base"
      >
        Rejoins-nous sur le groupe
      </Typographiy>
      <div className="flex justify-center relative z-10">
        <Button
          variant="accent"
          baseUrl="https://google.com"
          linkType={LinkTypes.EXTERNAL}
          responsiveSize="small"
        >
          rejoindre
        </Button>
      </div>
      <div className="w-96 h-96 absolute -bottom-40 transform -translate-x-1/2 left-1/2">
        <Image
          fill
          src="/assets/svg/logo-slack.svg"
          alt="image d'un cochon tirelire"
          className=""
        />
      </div>
    </div>
  );
};
