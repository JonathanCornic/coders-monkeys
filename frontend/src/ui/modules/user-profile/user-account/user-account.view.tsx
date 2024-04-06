import { FormsType } from "@/types/forms";
import { Typographiy } from "@/ui/design-system/typography/typography";
import { UserAccountForm } from "./user-account.form";

interface Props {
  form: FormsType;
}
export function UserAccountView({ form }: Props) {
  return (
    <div className="space-y-5 py-5 md:py-0">
      
      <Typographiy variant="h1" component="h1" responsiveVariant="h5" className="text-center md:text-start">
        Mon compte
      </Typographiy>
      <UserAccountForm form={form} />
    </div>
  );
}
