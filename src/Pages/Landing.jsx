import About from "../Components/Landing/About";
import Hero from "../Components/Landing/Hero";
import Projects from "../Components/Landing/Projects";
import Services from "../Components/Landing/Services";

const Landing = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
        </div>
    );
};

export default Landing;