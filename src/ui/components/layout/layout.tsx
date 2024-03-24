import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
