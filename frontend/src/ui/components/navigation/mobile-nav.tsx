import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import { RiMenu4Line, RiUser6Fill } from "react-icons/ri";
import { Container } from "../container/container";

export const MobileNav = () => {
  return (
    <Container className="flex items-center justify-between py-2">
      <Button
        icon={{ icon: RiMenu4Line }}
        variant="outline"
        size="very-small"
      ></Button>
      <Link href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="extra-small" />
          <Typographiy variant="caption4" weight="medium">
            Coders Monkeys
          </Typographiy>
        </div>
      </Link>
      <Button
        icon={{ icon: RiUser6Fill }}
        variant="outline"
        size="very-small"
        baseUrl="/mon-espace"
      ></Button>
    </Container>
  );
};
