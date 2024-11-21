import { useContext, } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ForgetPass = () => {

    const {emailRef,  handleResetPassword} = useContext(AuthContext);
    const email = emailRef.current?.value;
    const handleForgetPass = (e)=>{
         e.preventDefault();
       if(email){
         handleResetPassword(email)
         .then(() =>{
            window.location.href = "https://www.gmail.com";
         }).catch((err) => console.log(err.code))
       };
    };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold ">Update New Password</h1>
            </div>
            <form onSubmit={handleForgetPass} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="email"
                  className="input input-bordered rounded-none"
                  
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Reset password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
