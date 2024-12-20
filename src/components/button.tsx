import { ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  as?: T;
} & React.ComponentPropsWithoutRef<T>;
const Button = <T extends ElementType = "button">({
  children,
  as,
  onClick,
  className,
  type = "button",
  ...rest
}: Props<T>) => {
  const Component = as || "button";
  return (
    <Component
      onClick={onClick}
      className={`${className} btn bg-accent text-[#fff] hover:bg-accent/70 px-4 py-2`}
      type={Component === "button" ? type : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
