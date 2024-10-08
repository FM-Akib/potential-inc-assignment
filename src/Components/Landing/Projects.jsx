import Header from "../../Shared/Header";
import img1 from '../../assets/Web Designs.png'
import img2 from '../../assets/Web Designs 2.png'
const Projects = () => {
    const ProjectsCategory = [
        {title:'All', isActive:false},
        {title:'UI/UX', isActive:false},
        {title:'Web Design', isActive:true},
        {title:'App Design', isActive:false},
        {title:'Graphic Design', isActive:false},
    ]
    return (
        <div>
            <Header title="My Projects" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
           <div className="px-10 flex flex-row gap-5 mx-auto justify-center py-16">
            {
                ProjectsCategory.map((project, index) => (<div key={index} className={`${project.isActive ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8] text-black'}  inline-block rounded-[12px] border-[0.4px] border-[#545454]  py-2 px-5  text-center font-poppins text-[24px] font-normal leading-normal tracking-[0.72px]`}>{project.title}</div>))
            }
            </div>

            <div className="pt-16 px-10 flex justify-evenly items-center">
               
                <div className="">
                <div className="w-[445px] h-[489px] flex-shrink-0 rounded-[12px] bg-[#FFEBDB] relative">
                <img
                    src={img2}
                    alt="First Image"
                    className="absolute bottom-0 left-10 z-10 w-[274px] h-[405px] flex-shrink-0  "
                    

                />
                <img
                    src={img1}
                    alt="Second Image"
                    className="absolute bottom-0 right-6 w-[274px] h-[489px] flex-shrink-0  shadow-lg"
                />
                </div>

                <div className="flex flex-col gap-2 mt-8">
                <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">Web Design </p>
                <h2 className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">AirCalling Landing Page Design </h2>
                </div>
                </div>

                <div className="">
                <div className="w-[445px] h-[489px] flex-shrink-0 rounded-[12px] bg-[#FFEBDB] relative">
                <img
                    src={img2}
                    alt="First Image"
                    className="absolute bottom-0 left-10 z-10 w-[274px] h-[405px] flex-shrink-0  "
                    

                />
                <img
                    src={img1}
                    alt="Second Image"
                    className="absolute bottom-0 right-6 w-[274px] h-[489px] flex-shrink-0  shadow-lg"
                />
                </div>

                <div className="flex flex-col gap-2 mt-8">
                <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">Web Design </p>
                <h2 className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">AirCalling Landing Page Design </h2>
                </div>
                </div>


                <div className="">
                <div className="w-[445px] h-[489px] flex-shrink-0 rounded-[12px] bg-[#FFEBDB] relative">
                <img
                    src={img2}
                    alt="First Image"
                    className="absolute bottom-0 left-10 z-10 w-[274px] h-[405px] flex-shrink-0  "
                    

                />
                <img
                    src={img1}
                    alt="Second Image"
                    className="absolute bottom-0 right-6 w-[274px] h-[489px] flex-shrink-0  shadow-lg"
                />
                </div>

                <div className="flex flex-col gap-2 mt-8">
                <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">Web Design </p>
                <h2 className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">AirCalling Landing Page Design </h2>
                </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;