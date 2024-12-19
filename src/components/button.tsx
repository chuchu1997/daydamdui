import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const Button = ({ children, onClick, className, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}  btn bg-accent text-[#fff] hover:bg-accent/70 px-4 py-2 `}
    >
      {children}
    </button>
  );
};

export default Button;
