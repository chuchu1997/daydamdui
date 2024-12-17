import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
export const ButtonCustom = ({ children, onClick, className, type = "button" }: Props) => {
  return (
    <button type={type} onClick={onClick} className={`${className} btn bg-accent-light`}>
      {children}
    </button>
  );
};
