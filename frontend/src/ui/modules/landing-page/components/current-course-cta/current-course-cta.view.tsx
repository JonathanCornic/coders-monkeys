import { Container } from "@/ui/components/container/container";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export default function CurrentCourseCtaView() {

  return (
    <div className="bg-gray-300">
      <Container className="md:py-24 py-12 text-center">
        <Typographiy
          variant="h2"
          component="h2"
          className="mb-2.5"
          responsiveVariant="h5"
        >
          Formations React.js gratuite
        </Typographiy>
        <Typographiy
          variant="lead"
          component="h3"
          className="mb-5"
          responsiveVariant="body-sm"
        >
          Apprends à coder l’app des singes codeurs
        </Typographiy>
        <Typographiy
          variant="caption3"
          component="p"
          theme="gray"
          className="md:mb-16 mb-8 leading-6 md:leading-normal"
          responsiveVariant="caption4"
        >
          Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
        </Typographiy>
        <a
          href="https://www.youtube.com/watch?v=2ehqBu_dDsk&list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM&ab_channel=RemoteMonkey"
          target="_blank"
        >
          <div className="relative bg-gray-400 rounded md:h-[626px] sm:h-[300px] h-[150px]">
            <div className="flex flex-col items-center justify-center gap-2 relative z-10 h-full bg-gray rounded opacity-0 text-white hover:opacity-95 animate">
              <RiPlayCircleLine className="h-8 w-8 md:h-14 md:w-14" />
              <Typographiy
                variant="caption2"
                theme="white"
                className="uppercase"
                responsiveVariant="caption4"
              >
                Lire la formation
              </Typographiy>
            </div>
            <Image
              fill
              src="assets/images/coders-monkeys-cta.jpg"
              alt="illustration"
              className="object-cover object-center rounded"
            />
          </div>
        </a>
      </Container>
    </div>
  );
}
