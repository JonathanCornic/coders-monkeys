import { useMobile } from "@/hooks/use-mobile";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

interface Props {}
export function Navigation({}: Props) {
  const { isMobile } = useMobile();

  return (
    <div className="border-b-2 border-gray-400">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}
