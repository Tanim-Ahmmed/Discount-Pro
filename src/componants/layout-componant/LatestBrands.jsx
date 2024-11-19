import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestBrands = ({brands}) => {
    
    return (
        <div className="flex gap-2 bg-base-200 p-2">
            <p className="bg-blue-300 px-3 py-1 font-semibold" > Brands </p>
           <Marquee pauseOnHover speed={150} >
            <div className="space-x-10 flex">  
            {
             brands.map(brand => <Link key={brand._id} to="/brands">
                <img src={brand.brand_logo} alt="" className="w-10 rounded-full mx-3" />
             </Link> )
            }

            </div>
           </Marquee>
        </div>
    );
};

export default LatestBrands;