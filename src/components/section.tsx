type Props = {
  className?: string;
  id?: string;
  children: React.ReactNode;
};
const Section = ({ className, id, children }: Props) => {
  return (
    <div id={id} className={`${className} flex flex-col gap-8 mb-[30px]`}>
      {children}
    </div>
  );
};
export default Section;
