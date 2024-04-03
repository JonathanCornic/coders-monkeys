import { FormsType } from "@/types/forms";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { useMobile } from "@/hooks/use-mobile";

interface Props {
  form: FormsType;
}

export function RegisterView({ form }: Props) {
  const { isMobile } = useMobile();
  return (
    <Container className="md:grid grid-cols-2 gap-20 mb-32 flex-col">
      <div className="sm:flex items-center hidden">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/caracter-yellow.png"
            alt="Personnage low-poly jaune qui fait coucou"
            className="object-scale-down"
            priority
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <Typographiy variant={isMobile ? "body-base" : "h5"} component="h1">
              Inscription
            </Typographiy>
            <div className="flex items-center gap-1 flex-col sm:flex-row">
              <Typographiy variant="caption4" component="span" theme="gray">
                Tu as déja un compte ?
              </Typographiy>
              <Typographiy variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typographiy>
            </div>
          </div>
          <RegisterForm form={form} />
          <Typographiy
            variant="caption4"
            theme="gray"
            className="max-w-md mx-auto text-center space-y-1"
          >
            <div>En t'inscrivant, tu acceptes les</div>
            <div>
              <Link href="/#" className="text-gray font-semibold">
                Conditions d'utilisation
              </Link>{" "}
              et la{" "}
              <Link href="/#" className="text-gray font-semibold">
                Politique de confidentialité.
              </Link>
            </div>
          </Typographiy>
        </Box>
      </div>
    </Container>
  );
}
