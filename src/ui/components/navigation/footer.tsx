import { LinkType } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import { footerLinks } from "./app-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((columnLink) => (
    <FooterLink key={crypto.randomUUID()} data={columnLink} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typographiy variant="caption1" theme="white" weigth="medium">
            Formations gratuites
          </Typographiy>
          <Typographiy variant="caption3" theme="gray">
            Abonne-toi à la chaine !
          </Typographiy>
          <a href="https://youtube.com/@remotemonkey" target="_blank">
            <Image
              src="/assets/svg/YTB.svg"
              alt="Remote Monkey | Youtube"
              width={229}
              height={216}
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typographiy variant="caption4" theme="gray">
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
          <div></div>
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
      {link.type === LinkType.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkType.EXTERNAL && (
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
        weigth="medium"
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
