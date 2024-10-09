import { Outlet } from "react-router-dom";
import Landing from "../Pages/Landing";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <>
         <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    );
};

export default MainLayout;