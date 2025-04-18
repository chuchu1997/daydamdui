/** @format */

const BlockPhoneNumber = () => {
  return (
    <div className="hidden sm:block">
      <div className=" fixed z-50 bottom-[150px] right-[20px] bg-accent rounded-full p-2 px-4 flex items-center gap-x-2">
        <img
          src={"/phone.png"}
          alt="icon"
          width={35}
          height={35}
          className="group-hover:scale-125 scale-100 transition-all duration-400"></img>
        <span className="text-white font-semibold "> 0973 976 139</span>
      </div>
    </div>
  );
};

export default BlockPhoneNumber;
