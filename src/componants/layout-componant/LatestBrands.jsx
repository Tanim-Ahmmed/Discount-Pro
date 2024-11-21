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
            <div className="px-2 text-center">
              <Link key={brand._id} to="/brands">
                <img
                  src={brand.brand_logo}
                  alt=""
                  className="w-10 rounded-full mx-3"
                />
              </Link>
              <p>{brand.brand_name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestBrands;
