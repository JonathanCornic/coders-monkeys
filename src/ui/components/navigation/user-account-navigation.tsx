import { firebaseLogOutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export function UserAccountNavigation() {
  const router = useRouter();

  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientôt sur Coders Monkeys");
    router.push("/");
  };

  return (
    <Box className="flex fle-col gap-7">
      <div className="flex flex-col gap-3">
        <Typographiy variant="caption2" weigth="medium">
          <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
        </Typographiy>
        <Typographiy variant="caption2" weigth="medium">
          <ActiveLink href="/mon-espace/mes-projets">Mes Projets</ActiveLink>
        </Typographiy>
        <Button action={handleLogOutUser} variant="danger">
          Déconnexion
        </Button>
      </div>
    </Box>
  );
}
