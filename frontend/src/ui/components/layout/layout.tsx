import { SessionStatusTypes } from "@/types/session-status-types";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";
import { Session } from "../session/session";
import { CallsToActionSideBarContribution } from "../calls-to-action/calls-to-action-side-bar-contribution";
import { CallsToActionSideBarGroup } from "../calls-to-action/calls-to-action-side-bar-group";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: SessionStatusTypes;
}
export function Layout({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
}: Props) {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14 flex-grow">
        <div className="md:grid md:grid-cols-12 gap-7">
          <div className="md:col-span-3 md:space-y-8 space-y-5">
            <UserAccountNavigation />
            <CallsToActionSideBarContribution/>
            <CallsToActionSideBarGroup/>
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <div className="flex-grow">{children}</div>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Session sessionStatus={sessionStatus}>
        <Navigation />
        {isDisplayBreadcrumbs && <Breadcrumbs />}
        {view}
        <Footer />
      </Session>
    </div>
  );
}
