import { CodersMonkeysSlackView } from "./components/coders-monkeys-slack/coders-monkeys-slack.view";
import CurrentCourseCtaView from "./components/current-course-cta/current-course-cta.view";
import {FeaturedView} from "./components/featured/featured.view";
import {HeroTopView} from "./components/hero-top/hero-top.view";

export default function LandingPageView() {
  return (
    <>
      <HeroTopView/>
      <FeaturedView/>
      <CodersMonkeysSlackView/>
      <CurrentCourseCtaView/>
    </>
  )
}