import { FormsType } from "@/types/forms";
import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { ForgetPasswordForm } from "./forget-password.form";


interface Props {
  form: FormsType;
}
export function ForgetPasswordView({ form }: Props) {

  return (
    <Container className="md:grid grid-cols-2 gap-20 mb-32 flex-col">
      <div className="sm:flex items-center hidden">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/caracter-red.png"
            alt="Personnage low-poly rouge qui regarde sa tablette"
            className="object-scale-down"
            priority
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <Typographiy
              variant="h5"
              component="h1"
              className="text-center"
              responsiveVariant="body-base"
            >
              Mot de passe perdu ?
            </Typographiy>

            <Typographiy variant="caption4" component="span" theme="primary">
              <Link href="/connexion">Connexion</Link>
            </Typographiy>
          </div>
          <ForgetPasswordForm form={form} />
        </Box>
      </div>
    </Container>
  );
}
