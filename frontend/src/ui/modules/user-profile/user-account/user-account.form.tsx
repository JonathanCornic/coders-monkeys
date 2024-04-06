import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typographiy } from "@/ui/design-system/typography/typography";

interface Props {
  form: FormsType;
}
export function UserAccountForm({ form }: Props) {
  const { errors, control, register, handleSubmit, onSubmit, isLoading } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-10">
      <div className="flex items-center justify-between py-5">
        <div>{/* {<UploadAvatar/>} */}</div>
        <div className="flex items-end gap-1">
          <Typographiy variant="h1" responsiveVariant="caption2">0</Typographiy>
          <Typographiy variant="caption4" theme="gray-600" className="md:mb-3 mb-0.5">Abonnés</Typographiy>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        <div className="col-span-6 space-y-4">
          <Input
            label="Nom d'utilisateur"
            isLoading={isLoading}
            placeholder="John doe"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Tu dois renseigner un pseudo"
            id="displayName"
          />
          <Input
            label="Spécialité"
            isLoading={isLoading}
            placeholder="Développeur frontend React Freelance"
            type="text"
            register={register}
            errors={errors}
            errorMsg="Tu dois renseigner ton expertise"
            id="expertise"
          />
        </div>
        <div className="col-span-6 space-y-4">
          <Input
            label="Linkedin"
            isLoading={isLoading}
            placeholder="Linkedin.com/john doe"
            type="url"
            register={register}
            errors={errors}
            errorMsg="Tu dois indiquer ton profil linkedin"
            id="linkedin"
            required={false}
          />
          <Input
            label="Github"
            isLoading={isLoading}
            placeholder="Github.com/john doe"
            type="url"
            register={register}
            errors={errors}
            errorMsg="Tu dois indiquer ton github"
            id="github"
            required={false}
          />
        </div>
      </div>
      <Textarea
        label="Biographie"
        isLoading={isLoading}
        placeholder="Indique ta biographie ..."
        rows={16}
        register={register}
        errors={errors}
        errorMsg="Tu dois indiquer ta biographie"
        id="biography"
        required={false}
      />
      <div className="flex md:justify-end justify-center">
        <Button isLoading={isLoading} type="submit" responsiveSize="small">
          Enregister
        </Button>
      </div>
    </form>
  );
}
