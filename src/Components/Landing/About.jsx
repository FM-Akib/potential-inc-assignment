import { Slider } from '@material-tailwind/react';
import leftImg from '../../assets/image.png';
const About = () => {
    const skills = [
        {title:'UX', value:'96'},
        {title:'Website Design', value:'90'},
        {title:'App Design ', value:'98'},
        {title:'Graphic Design ', value:'92'},
    ]
    return (
        <section className="container mx-auto items-center min-h-screen px-5 md:px-10 pt-28 flex flex-col md:flex-row">

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center  relative">
                <img src={leftImg} alt="About image" className=' w-full  md:h-[617.24px]' />
                <div className="absolute top-20 left-28 w-[374px] h-[83px] flex-shrink-0 bg-[rgba(253,111,0,0.60)]"></div>
            </div>
           
           {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col">
                <div>
                    <h1 className="text-black text-[65px] font-poppins font-semibold leading-none tracking-[1.95px]">About Me </h1>
                </div>

                <p className="py-4 md:py-8 text-black font-poppins text-lg md:text-[21px] font-normal tracking-[0.63px] text-justify">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                </p>
                
                <div className="flex gap-8 flex-col">
                {
                    skills.map((skill, index) => (
                        <div className="" key={index}>
                            <h1 className='text-black font-poppins text-2xl font-semibold tracking-[0.72px] leading-normal mb-4'>{skill.title}</h1>
                            <Slider color='orange'  size="lg" defaultValue={skill.value} />
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    );
};

export default About;