import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Header from '../../Shared/Header';
import Slider from 'react-slick';
import testimonialImg1 from '../../assets/Ellipse 10.svg';
import '../../App.css';

const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px", 
        slidesToShow: 2,      
        slidesToScroll: 1,
        speed: 500,
        beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
        <section className="pb-32">
            <Header title="Testimonials" subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
            
            <div className="slider-container  py-10 mx-auto ">
                <Slider {...settings}>
                    
                    {[...Array(4)].map((_, index) => (
                        <div 
                            key={index} 
                            className={`flex justify-center w-[1000px] pb-20`} // Center the slides
                        >
                            <div 
                                className={`w-[700px] h-[280px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8] flex items-center gap-7 py-14 px-8 transition-all duration-300 ${activeSlide === index ? 'opacity-100' : 'opacity-50'}`}
                            >
                                <img src={testimonialImg1} alt="Testimonial" className="w-[150px] h-[150px]" /> 
                                <div className="flex flex-col justify-center"> 
                                  
                                   <div className="relative ">
                                    <span className='absolute -left-4 -top-4 text-[#FD6F00] text-[32px] font-bold tracking-[0.64px]'>" </span>
                                    <p className='text-[#424242] relative font-poppins text-[18px] font-normal leading-normal tracking-[0.42px]'>
                                        Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. 
                                        <span className='text-[#FD6F00] ps-1 absolute bottom-0 text-[32px] font-bold tracking-[0.64px] transform scale-y-[-1]'> "</span>

                                    </p>
                                    </div>
                                   
                                    <div className="mt-2">
                                        <h1 className='text-black text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]'>Name</h1>
                                        <p className='text-black text-justify font-poppins text-[19px] font-normal leading-normal tracking-[0.38px]'>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
