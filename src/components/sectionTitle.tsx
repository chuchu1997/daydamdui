type Props = {
  title: string;
  className?: string;
};
const SectionTitle = ({ title, className }: Props) => {
  return (
    <div className="flex items-center justify-center py-10">
      {/* Short line before */}
      <div className="h-[4px] w-12 bg-accent"></div>
      {/* Text */}
      <h1 className="italic capitalize px-4 text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">
        {title}
      </h1>
      {/* Short line after */}
      <div className="h-[4px] w-12 bg-accent"></div>
    </div>
  );
};
export default SectionTitle;
