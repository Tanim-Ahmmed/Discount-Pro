import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { brand_logo, brand_name, rating, description, isSaleOn, _id } = brand;

  return (
    <div className="border rounded-lg p-4 shadow-md flex sm:flex-row flex-col items-center bg-white">
      <img
        src={brand_logo}
        alt={brand_name}
        className="w-24 h-24 object-cover rounded-full mb-4 sm:mb-0 sm:mr-4"
      />
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-semibold mr-2">{brand_name}</h2>

          <div className="flex items-center text-blue-800">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#124e66]"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#124e66]"
               
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#124e66]"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#124e66]"
                
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2  bg-base-300"
                defaultChecked
              />
            </div>
            {rating}
          </div>
        </div>

        <p className="text-gray-600 mb-2">{description}</p>

        {isSaleOn && (
          <div className="text-green-500 font-bold animate-bounce">
            Sale is on!
          </div>
        )}
      </div>
      <div>
        <Link to={`/brands/${_id}`} id={_id} className="btn btn-neutral  rounded-none">View Coupons</Link>
      </div>
    </div>
  );
};

export default Brand;
