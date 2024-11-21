import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();

  const { manageProfile} = useContext(AuthContext);
   
  const handlProfileUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    manageProfile({displayName: name, photoURL: photo})
    .then((res)=>{
      
      navigate("/");
    }).catch(err => {
      // console.log(err.code);
    })
  }


  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold ">Update your Profile</h1>
            </div>
            <form onSubmit={handlProfileUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered rounded-none"
                  required
                />
                
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo-url"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
