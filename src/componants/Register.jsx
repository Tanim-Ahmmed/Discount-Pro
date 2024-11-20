import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
const Register = () => {

    const {createNewUser, setUser, manageProfile,handleGoogleLogin } = useContext(AuthContext);
    const [error , setError] = useState("");
    const navigate = useNavigate();

    const handleRegister =(e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        const conPass  = form.get("confirm");

        if(password.length < 6 ){ 
          
              setError("Passward must contain atleast 6 character.")
              return;
  
          
        }

        if(password !== conPass){

          setError("Passward didn't match ")
            return;

        }

        if(!/[a-z]/.test(password)){
          setError("Passward must contain atleast one lowercase latter. ")
            return;

        }

        if(!/[A-Z]/.test(password)){

          toast.error("Passward must contain atleast one uppercase latter. " , {
            position: "top-center",
            autoClose: 3000, });
            setError("Passward must contain atleast one uppercase latter. ");
            return;

        }

        console.log({name, email, photo, password})
        createNewUser(email, password)
        .then(res =>{
          const user= res.user;
          setUser(user);
          console.log(user);
          manageProfile(name, photo);
          navigate("/");
        })
        .catch(err => setError(err.code))
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold ">Register your account</h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">

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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered rounded-none"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
           { error &&  <p className="text-red-500 text-center">{error}</p> 
           }

          <p className="text-center font-semibold py-3">
            Allready Have an Account?
            <Link to="/auth/login" className="text-red-500 ml-3 font-bold">
              Login
            </Link>
          </p>
          <div onClick={handleGoogleLogin} className="flex justify-center items-center gap-4 border rounded-none py-3 font-bold w-10/12 mx-auto hover:text-white hover:bg-neutral hover:cursor-pointer">
             <FcGoogle />
               <button >Sign in with Google</button>
            </div>

        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
