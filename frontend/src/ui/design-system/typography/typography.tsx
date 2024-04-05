import { useMobile } from "@/hooks/use-mobile";
import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4"
    | "caption5";
  responsiveVariant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4"
    | "caption5";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?:
    | "black"
    | "gray"
    | "white"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "gray-600";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode;
}

export function Typographiy({
  variant = "h3",
  responsiveVariant,
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) {

  const { isMobile } = useMobile();

  const selectedVariant = isMobile && responsiveVariant ? responsiveVariant : variant;

  const variantStyles = {
    display: "text-8xl",
    h1: "text-7xl",
    h2: "text-6xl",
    h3: "text-5xl",
    h4: "text-4xl",
    h5: "text-3xl",
    lead: "text-2xl",
    "body-lg": "text-lg",
    "body-base": "text-base",
    "body-sm": "text-sm",
    caption1: "text-caption1",
    caption2: "text-caption2",
    caption3: "text-caption3",
    caption4: "text-caption4",
    caption5: "text-caption5",
  };

  const colorStyles = {
    black: "text-gray",
    gray: "text-gray-700",
    "gray-600": "text-gray-600",
    white: "text-white",
    primary: "text-primary",
    secondary: "text-secondary",
    danger: "text-alert-danger",
    success: "text-alert-success",
    warning: "text-alert-warning",
  };

  return (
    <Component
      className={clsx(
        variantStyles[selectedVariant],
        colorStyles[theme],
        weight === "medium" && "font-medium",
        className
      )}
    >
      {children}
    </Component>
  );
}
