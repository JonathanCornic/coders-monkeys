import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}
export function Layout({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
}: Props) {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14 flex-grow">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
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
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </div>
  );
}
