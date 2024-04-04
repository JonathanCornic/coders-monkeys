import { useAuth } from "@/context/AuthUserContext";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Typographiy } from "@/ui/design-system/typography/typography";
import Link from "next/link";

export const AccountAvatarNavigationLink = () => {
  const { authUser } = useAuth();
  const { photoURL, displayName } = authUser;

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <Avatar
        src={photoURL}
        alt={
          displayName ? `Avatar de ${displayName}` : "Avatar par defaut de l'utilisateur"
        }
        size="large"
      />
      <div className="max-w-[160px]">
        <Typographiy variant="caption2" weight="medium" className="truncate">
          {displayName ? displayName : "Bienvenue"}
        </Typographiy>
        <Typographiy variant="caption4" weight="medium" theme="gray">
          Mon compte
        </Typographiy>
      </div>
    </Link>
  );
};
