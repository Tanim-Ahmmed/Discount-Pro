import { useLoaderData, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  

  const brand = data.find((b) => b._id === id);

  const { brand_logo, brand_name, rating, coupons, shop_link  } = brand;

  const handleCopy = ()=>{
    toast.success("Code copied successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  }
  
  return (
   <div className="w-11/12 mx-auto ">
    <header>
        <div className="text-center text-black font-bold mb-8 bg-[#4988a1] py-6">
        <img src={brand_logo} alt={brand_name}  className="mx-auto w-32 h-32 object-cover rounded-lg"/>
       <div className="flex justify-center items-center py-3 gap-2 "> 
       <h1 className="text-3xl font-bold ">{brand_name}</h1>
        <span className="text-gray-700 text-lg">({rating})</span>
       </div>
        </div>
    </header>
    <main>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

      { coupons.map((coupon, i)=>(

        <div key={i} className="border p-4 rounded-lg shadow-lg bg-white ">
          <h3 className=" text-xl inline-block py-1 px-3   font-bold rounded-bl-xl rounded-tr-xl bg-[#124e66] text-white" >Promo code</h3>
          <p className="text-gray-600 text-lg pt-4">{coupon.description}</p>
          <div className="sm:flex  justify-between text-[#124e66] text-xl py-3  font-bold]">
          <p className="" > Type: {coupon.coupon_type}</p>
           <p className="text-bold animate__animated animate__pulse">Expire on: {coupon.expiry_date}</p>
          </div>
           <div className="mt-4 flex justify-between items-center space-x-4">
            <CopyToClipboard text={coupon.coupon_code}>
                <button onClick={handleCopy} className="btn btn-neutral btn-sm rounded-none">Copy Code</button>
            </CopyToClipboard>
            {console.log(coupon)}
            <a href={shop_link}
            target="blank"
            className="btn btn-neutral btn-sm rounded-none"
            >Use Now</a>
            
           </div>

        </div>


      ))
       }

      </div>

    </main>
   </div>
  );
};

export default BrandDetails;
