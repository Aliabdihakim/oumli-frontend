import clsx from "clsx";

type ThemeType =
  | "default"
  | "defaultFlip"
  | "disabled"
  | "grayBlack"
  | "whiteGray";
export type FontWeightType = keyof typeof fontWeightClass;
export type FontSizeType = keyof typeof fontSizeClass;

type DescriptionProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "right";
  theme?: ThemeType;
  size?: FontSizeType;
  titleSize?: FontSizeType;
  descriptionSize?: FontSizeType;
  titleWeight?: FontWeightType;
  descriptionWeight?: FontWeightType;
  gap?: number;
  className?: string;
};

const alignClass = { left: "", right: "text-right" } as const;
const themeClass = {
  default: {
    body: "text-primary",
    secondary: "text-secondary",
  },
  defaultFlip: {
    body: "text-secondary",
    secondary: "text-primary",
  },
  disabled: {
    body: "text-primary opacity-50",
    secondary: "text-secondary opacity-50",
  },
  grayBlack: {
    body: "text-secondary",
    secondary: "text-black",
  },
  whiteGray: {
    body: "text-white",
    secondary: "text-neutral-400",
  },
} as const;

const fontSizeClass = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
} as const;

const fontWeightClass = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const Description = ({
  title,
  description,
  align = "left",
  theme = "default",
  size = "sm",
  titleSize = "xl",
  descriptionSize,
  titleWeight = "normal",
  descriptionWeight = "normal",
  gap = 2,
  className,
}: DescriptionProps) => (
  <dl>
    <dt
      className={clsx(
        "leading-5",
        fontSizeClass[titleSize || size],
        fontWeightClass[titleWeight],
        alignClass[align],
        themeClass[theme].body,
        className
      )}
      style={{ marginBottom: `${gap * 0.25}rem` }} // Dynamic inline gap
    >
      {title}
    </dt>
    {description && (
      <dd
        className={clsx(
          "",
          fontSizeClass[descriptionSize || size],
          fontWeightClass[descriptionWeight],
          alignClass[align],
          themeClass[theme].secondary
        )}
      >
        {description}
      </dd>
    )}
  </dl>
);

export { Description };
export type { DescriptionProps, ThemeType };
