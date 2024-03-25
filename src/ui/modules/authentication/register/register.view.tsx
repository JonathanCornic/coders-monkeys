import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";

export function RegisterView() {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/caracter-yellow.png"
            alt="Personnage low-poly jaune qui fait coucou"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typographiy variant="h5" component="h1">
              Inscription
            </Typographiy>
            <div className="flex items-center gap-1">
              <Typographiy variant="caption4" component="span" theme="gray">
                Tu as déja un compte ?
              </Typographiy>
              <Typographiy variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typographiy>
            </div>
          </div>
          <RegisterForm />
        </Box>
      </div>
    </Container>
  );
}
