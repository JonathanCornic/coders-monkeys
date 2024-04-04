import { firebaseLogOutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export function UserAccountNavigation() {
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientôt sur Coders Monkeys");
  };

  return (
    <Box className="flex fle-col gap-7">
      <div className="flex flex-col gap-3">
        <Typographiy variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
        </Typographiy>
        <Typographiy variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace/mes-projets">Mes Projets</ActiveLink>
        </Typographiy>
        <Button action={handleLogOutUser} variant="danger">
          Déconnexion
        </Button>
      </div>
    </Box>
  );
}
