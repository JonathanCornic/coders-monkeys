import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "../button/button";
import { Typographiy } from "../typography/typography";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";

export default function CallToActionView() {
  const {isMobile} = useMobile()

  return (
    <div className="overflow-hidden bg-primary">
      <Container className="md:py-20 py-12 relative">
        <div className="relative z-10 max-w-3xl space-y-5 text-center sm:text-start">
          <Typographiy
            variant={isMobile ? "h5" : "h2"}
            component="h2"
            theme="white"
          >
            N’attend pas pour développer tes compétences...
          </Typographiy>
          <div>
            <Button
              variant="succes"
              baseUrl="https://www.youtube.com/watch?v=2ehqBu_dDsk&list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM&ab_channel=RemoteMonkey"
              linkType={LinkTypes.EXTERNAL}
              size={isMobile ? "small" : "medium"}
            >
              Formation React.js gratuite
            </Button>
          </div>
        </div>
        {!isMobile && (
          <div>
            <Image
              width={1510}
              height={1510}
              src="assets/svg/bombers.svg"
              alt="illustration d'une bombe"
              className="absolute md:-bottom-[500px] md:-right-[450px]"
            />
          </div>
        )}
      </Container>
    </div>
  );
}
