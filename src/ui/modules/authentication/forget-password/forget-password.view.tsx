import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { ForgetPasswordForm } from "./forget-password.form";

export function ForgetPasswordView() {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/caracter-red.png"
            alt="Personnage low-poly rouge qui regarde sa tablette"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typographiy variant="h5" component="h1">
              Mot de passe perdu ?
            </Typographiy>

            <Typographiy variant="caption4" component="span" theme="primary">
              <Link href="/connexion">Connexion</Link>
            </Typographiy>
          </div>
          <ForgetPasswordForm />
        </Box>
      </div>
    </Container>
  );
}

