type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return (
    <div className="  mb-[40px] mt-[130px] min-h-[500px] ">{children}</div>
  );
};

export default Body;
