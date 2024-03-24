import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";
import { RiFacebookFill } from "react-icons/ri";
import { footerSocialsLinks } from "./app-links";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}
export function SocialNetworksButtons({ className, theme = "accent" }: Props) {
  const icoList = footerSocialsLinks.map((socialNetwork) => (
    <Button
      key={crypto.randomUUID()}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookFill }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
}
