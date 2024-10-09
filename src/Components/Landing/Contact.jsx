import { useState } from "react";
import Header from "../../Shared/Header";

const Contact = () => {
    const [email, setEmail] = useState("");

    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted email: ", email);
    };
    return (
        <section>
            <Header title="Lets Design Together" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
            
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 justify-center pt-12">
            <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleInputChange}
                className="w-[627px] h-[75px] px-5 flex-shrink-0 rounded-[14px] border border-[#AFAFAF] bg-[#F8F8F8] text-[#797979]  font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] focus:outline-none"
                required
            />
            <button
                type="submit"
                className="w-[222px] h-[75px] flex-shrink-0 rounded-[14px] bg-[#FD6F00] text-white text-center font-poppins text-[24px] font-semibold leading-normal tracking-[0.72px]
"
            >
                Contact Me
            </button>
    </form>
        
        
        </section>
    );
};

export default Contact;