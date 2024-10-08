
const Header = ({title,subTitle}) => {
    return (
        <div>
            <h1 className="text-black text-[65px] text-center font-poppins font-semibold leading-none tracking-[1.95px]">{title} </h1>
            <p className="py-4 text-center w-[932px] md:py-4 text-black font-poppins text-lg md:text-[21px] font-normal tracking-[0.63px] mx-auto">
           {subTitle}
            </p>
        </div>
    );
};

export default Header;