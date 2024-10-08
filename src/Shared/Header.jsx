const Header = ({ title, subTitle }) => {
    return (
      <div className="px-4">
        {/* Title */}
        <h1 className="text-black text-[36px] sm:text-[45px] md:text-[55px] lg:text-[65px] text-center font-poppins font-semibold leading-none tracking-[1.95px]">
          {title}
        </h1>
  
        {/* Subtitle */}
        <p className="py-4 text-center w-full sm:w-[80%] md:w-[70%] lg:w-[932px] md:py-4 text-black font-poppins text-sm sm:text-base md:text-lg lg:text-[21px] font-normal tracking-[0.63px] mx-auto">
          {subTitle}
        </p>
      </div>
    );
  };
  
  export default Header;
  