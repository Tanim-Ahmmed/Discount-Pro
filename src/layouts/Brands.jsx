import { useLoaderData } from "react-router-dom";
import Brand from "../componants/Brand";

 
 const Brands = () => {
   const brands = useLoaderData();


  return (
    <div className="w-11/12 mx-auto">
        <div className="py-6">
            <h1 className="text-2xl font-bold text-center mb-6">All Brands</h1>

            <div >
                <input type="text"
                 placeholder="Search brands..." 
                className="input input-bordered w-full"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 mt-10">
              {
                brands.map(brand =>(<Brand key={brand._id} brand={brand}> </Brand>
                ))
              }

            </div>



        </div>
      
    </div>
  );
};

export default Brands;
