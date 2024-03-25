import { Typographiy } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { Container } from "../container/container";

export function Breadcrumbs() {
  const router = useRouter();
  const asPath = router.asPath;
  const segments = asPath.split("/");
  const lastSegment = segments[segments.length - 1];
  segments[0] = "accueil";

  const view = segments.map((path, index) => (
    <div key={crypto.randomUUID()} className="flex items-center">
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}
      >
        <Typographiy
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "accueil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome3Line className="inline -mt-0.5" />
          )}
        </Typographiy>
        {path !== lastSegment && (
          <Typographiy
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typographiy>
        )}
      </Link>
    </div>
  ));

  return <Container className="flex items-center gap-2 py-7">{view}</Container>;
}
