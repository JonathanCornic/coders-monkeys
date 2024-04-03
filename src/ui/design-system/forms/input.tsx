import clsx from "clsx";
import { Typographiy } from "../typography/typography";
import { useMobile } from "@/hooks/use-mobile";

interface Props {
  isLoading: boolean;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  isAutocompleted?: boolean;
  label?: string;
}

export function Input({
  isLoading,
  placeholder,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  required = true,
  isAutocompleted = false,
  label,
}: Props) {
  const {isMobile} = useMobile()
  return (
    <div className="space-y-2">
      {label && (
        <Typographiy
          variant="caption4"
          theme={errors[id] ? "danger" : "gray-600"}
        >
          {label}
        </Typographiy>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && "cursor-not-allowed",
          errors[id]
            ? "placeholder-alert-danger text-alert-danger"
            : "placeholder-gray-600",
          "w-full md:p-4 p-2 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typographiy variant={isMobile ? "caption5":"caption4"} component="div" theme="danger">
          {errors[id]?.message}
        </Typographiy>
      )}
    </div>
  );
}
