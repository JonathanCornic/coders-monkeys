import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "../button/button";
import { Typographiy } from "../typography/typography";
import Image from "next/image";

export default function CallToActionView() {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20 ">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typographiy variant="h2" component="h2" theme="white">
            N’attend pas pour développer tes compétences...
          </Typographiy>
          <div>
            <Button variant="succes" baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
              Formation React.js gratuite
            </Button>
          </div>
        </div>
        <div>
          <Image
            width={1510}
            height={1510}
            src="assets/svg/bombers.svg"
            alt="illustration d'une bombe"
            className="absolute -bottom-[600px] right-[150px]"
          />
        </div>
      </Container>
    </div>
  );
}
