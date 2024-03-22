import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographiy } from "@/ui/design-system/typography/typography";

import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import Link from "next/link";

interface Props {}
export function Navigation({}: Props) {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Coders Monkeys
              </div>
              <Typographiy variant="caption4" component="span" theme="gray">
                Trouve de l'inspiration & reçois des feedbacks !
              </Typographiy>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typographiy
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design system</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </Typographiy>
          <div className="flex items-center gap-2">
            <Button size="small">Connexion</Button>
            <Button size="small" variant="secondary">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
