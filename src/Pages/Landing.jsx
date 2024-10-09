import About from "../Components/Landing/About";
import Hero from "../Components/Landing/Hero";
import Projects from "../Components/Landing/Projects";
import Services from "../Components/Landing/Services";
import Testimonial from "../Components/Landing/Testimonial";

const Landing = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Testimonial/>
        </div>
    );
};

export default Landing;