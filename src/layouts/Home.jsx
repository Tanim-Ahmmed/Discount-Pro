import { useLoaderData } from "react-router-dom";
import Banner from "../componants/layout-componant/Banner";
import LatestBrands from "../componants/layout-componant/LatestBrands";
import OnSell from "../componants/OnSell";

const Home = () => {

  const brands = useLoaderData();
   
  const brandsOnsell = brands.filter(b => b.isSaleOn);

  

  
    return (
        <div className="w-11/12 mx-auto py-6">
           <Banner></Banner>
           <LatestBrands brands={brands}></LatestBrands>
          <main>
            <h2 className="text-lg font-semibold py-6 animate__animated animate__bounce">Brands on Sell</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 animate__animated  animate__pulse">
                {
                 brandsOnsell.map(brand => <OnSell key={brand._id} brand={brand}></OnSell> )
                }
             </div>
          </main>

        </div>
    );
};

export default Home;