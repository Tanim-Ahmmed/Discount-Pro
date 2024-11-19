import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
 const {user, userLogin } = useContext(AuthContext);

 const handleLogin =(e) =>{
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log({ email, password})

    userLogin(email,password)
    .then(res =>{
        const user = res.user;
    })
    .catch((err) => console.log(err.code))
    
}
 
  return (
    <div className="min-h-screen flex justify-center items-center" >
      <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Login your account</h1>
          </div>           
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-none">Login</button>
              </div>
            </form>

            <p className="text-center font-semibold">Don't Have an Account?
            <Link to="/auth/register" className="text-red-500 ml-3 font-bold">Register</Link>

            </p>

          </div>
        
      </div>
    </div>
  );
};

export default Login;
