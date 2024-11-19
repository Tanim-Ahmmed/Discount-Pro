import { Outlet } from "react-router-dom";
import Header from "./componants/Header";
import Footer from "./componants/Footer";


const Root = () => {
    return (
        <div className="max-w-[1400px] mx-auto bg-base-200">
           <Header></Header>
     <div className="min-h-screen"> <Outlet></Outlet>  </div>  
           <Footer></Footer>
        </div>
    );
};

export default Root;