import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestBrands = ({ brands }) => {
  return (
    <div className="flex gap-2 bg-base-100 p-2">
      <p className=" bg-[#124E66] text-white px-2 py-1 font-semibold ">
        Top Brands
      </p>
      <Marquee pauseOnHover speed={150}>
        <div className="space-x-10 flex">
          {brands.map((brand) => (
            <div key={brand._id} className="px-2 text-center">
              <Link  to="/brands">
              <div>
              <img
                  src={brand.brand_logo}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover mx-3"
                />
                <p>{brand.brand_name}</p>
              </div>
                
              </Link>
              
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestBrands;
