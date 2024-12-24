import React from "react";

type Props = {
  title: string;
  className?: string;
  type?: "h1" | "h2" | "h3";
};
const SectionTitle = ({ title, className, type = "h2" }: Props) => {
  return (
    <div className={`${className} flex items-center justify-center py-10 `}>
      {/* Short line before */}
      <div className="h-[4px] w-12 bg-accent"></div>
      {/* Text */}

      {React.createElement(
        type,
        {
          className:
            "italic capitalize px-4 text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500",
        },
        title
      )}

      {/* Short line after */}
      <div className="h-[4px] w-12 bg-accent"></div>
    </div>
  );
};
export default SectionTitle;
