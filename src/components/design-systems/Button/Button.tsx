import { Button as ShadcnButton } from "@/components/ui/button";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "white" | "gray" | "outline";
  size?: "sm" | "md" | "lg";
  textSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"; // New textSize prop
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  variant = "primary",
  size = "md",
  textSize,
  children,
  onClick,
  className,
  disabled,
  loading,
}: ButtonProps) => {
  const baseClass = "px-4 py-2 rounded";
  const variantClass = {
    primary: "bg-primary text-white hover:opacity-90 hover:bg-primary",
    secondary: "bg-secondary text-white hover:opacity-90 hover:bg-secondary",
    white: "bg-white text-black hover:bg-gray-50",
    gray: "bg-gray-500 text-white hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-secondary bg-transparent text-secondary hover:bg-gray-50",
  }[variant];

  const sizeClass = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  }[size];

  const textSizeClass = textSize ? `text-${textSize}` : "";

  return (
    <ShadcnButton
      onClick={onClick}
      className={`${baseClass}  ${variantClass} ${sizeClass} ${textSizeClass} ${className}`}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : children}
    </ShadcnButton>
  );
};

export { Button };
