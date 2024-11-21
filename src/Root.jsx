import { Outlet } from "react-router-dom";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div className="max-w-[1400px] mx-auto bg-base-200">
           <Header></Header>
     <div className="min-h-screen"> <Outlet></Outlet>  </div>  
           <Footer></Footer>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;