import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiEyeCloseFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs"; 
const Login = () => {
  const [showPass , setShowPass] = useState(false);
  const { setUser, userLogin, handleGoogleLogin, emailRef } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    handleGoogleLogin().then((res) => {
      const user = res.user;
      setUser(user);
      navigate(location?.state || "/");
      toast.success(`Welcome ${user.displayName} ! login successfull `, {
        position: "top-center",
        autoClose: 3000,
      });
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");



    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");

        toast.success(`Welcome ${user.displayName} ! login successfull `, {
          position: "top-center",
          autoClose: 3000,
        });
        
      })
      .catch((err) => {
        toast.error(` login failed! please try again. `, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  const handleForgetPass = () =>{
    const email = emailRef.current?.value ;
    if(!email){
      toast.error(' please enter your email ', {
        position: "top-center",
        autoClose: 3000,
      });

    }  else{
      navigate("/auth/login/reset");

    }

  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Login your account</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control ">
              <label className="label ">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                ref={emailRef}
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password" }
                name="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="btn rounded-none  btn-xs bg-base-200 absolute right-3 top-12"
              >
                {showPass ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </button>

              <label className="label">
                <Link onClick={handleForgetPass} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Login</button>
            </div>
          </form>

          <p className="text-center font-semibold pb-6">
            Don't Have an Account?
            <Link to="/auth/register" className="text-red-500 ml-3 font-bold">
              Register
            </Link>
          </p>

          <div
            onClick={handleLoginWithGoogle}
            className="flex justify-center items-center gap-4 border rounded-none py-3 font-bold w-10/12 mx-auto hover:text-white hover:bg-neutral hover:cursor-pointer"
          >
            <FcGoogle />
            <button>Sign in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
