import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./login.form";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}
export function LoginView({form}:Props) {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/caracter-blue.png"
            alt="Personnage low-poly bleu qui saute"
            className="object-scale-down"
            priority
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typographiy variant="h5" component="h1">
              Connexion
            </Typographiy>
            <div className="flex items-center gap-1">
              <Typographiy variant="caption4" component="span" theme="gray">
                Tu n'as pas de compte ?
              </Typographiy>
              <Typographiy variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">S'inscrire</Link>
              </Typographiy>
            </div>
          </div>
          <LoginForm form={form} />
          <Typographiy variant="caption4" theme="primary" className="text-center">
            <Link href="/connexion/mot-de-passe-perdu">mot de passe perdu ?</Link>
          </Typographiy>
        </Box>
      </div>
    </Container>
  );
}
