import { useNavigate } from "react-router-dom";



const OnSell = ({brand}) => {

    const {brand_name, brand_logo,category, coupons} = brand;
    
    const navigate = useNavigate();
    
    const handleLogoClick =()=>{
         navigate('/brands')
    }


    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center space-x-4">
          <img
            src={brand_logo}
            alt={` Logo`}
            onClick={handleLogoClick}
            className="w-16 h-16 object-cover rounded-full border border-gray-200 hover:cursor-pointer"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{brand_name}</h2>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            <span className="font-bold text-lg">{coupons.length}</span> Coupons Available
          </p>
        </div>
      </div>
    );
};

export default OnSell;