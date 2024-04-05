import { LinkTypes } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { footerLinks } from "./app-links";
import { SocialNetworksButtons } from "./social-networks-buttons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((columnLink) => (
    <FooterLink key={crypto.randomUUID()} data={columnLink} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16 flex-col md:flex-row md:gap-24">
        <div className="flex flex-col items-center gap-1">
          <Typographiy variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typographiy>
          <Typographiy variant="caption3" theme="gray">
            Abonne-toi à la chaine !
          </Typographiy>
          <a href="https://youtube.com/@remotemonkey" target="_blank">
            <div className="relative md:w-56 md:h-56 w-28 h-28 mb-6">
              <Image
                src="/assets/svg/YTB.svg"
                alt="Remote Monkey | Youtube"
                fill
              />
            </div>
          </a>
        </div>
        <div className="flex flex-wrap gap-7 flex-col text-center md:flex-row md:text-start">
          {footerNavigationList}
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between flex-col gap-4 text-center md:flex-row">
          <Typographiy
            variant="caption4"
            theme="gray"
            className="leading-6 md:leading-normal"
          >
            {` Copyright © ${currentYear} | Propulsed by`}{" "}
            <a
              href="https://arnaud-desportes.fr"
              target="_blank"
              className="underline"
            >
              Arnaud desportes
            </a>
            {` - Remote monkey SASU`}
          </Typographiy>
          <div>
            <SocialNetworksButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
}

interface FooterLinkProps {
  data: FooterLinks;
}
function FooterLink({ data }: FooterLinkProps) {
  const linksList = data.links.map((link) => (
    <div key={crypto.randomUUID()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typographiy
        variant="caption2"
        theme="white"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typographiy>
      <Typographiy variant="caption3" theme="gray" className="space-y-4">
        {linksList}
      </Typographiy>
    </div>
  );
}
