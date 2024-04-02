import { useAuth } from "@/context/AuthUserContext";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { Container } from "../container/container";
import { AccountAvatarNavigationLink } from "./account-avatar-link";
import { ActiveLink } from "./active-link";

export const DesktopNav = () => {
  const { authUser } = useAuth();

  const authenticationSystem = (
    <div className="flex items-center gap-2">
      <Button baseUrl="/connexion" size="small">
        Connexion
      </Button>
      <Button baseUrl="connexion/inscription" size="small" variant="secondary">
        Rejoindre
      </Button>
    </div>
  );
  return (
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
          <ActiveLink href="/mon-espace/mes-projets">Projets</ActiveLink>
          <ActiveLink href="/formations">Formations</ActiveLink>
          <ActiveLink href="/contacts">Contacts</ActiveLink>
        </Typographiy>

        {!authUser ? authenticationSystem : <AccountAvatarNavigationLink />}
      </div>
    </Container>
  );
};
