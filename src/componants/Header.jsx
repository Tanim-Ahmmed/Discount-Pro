import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
           
  const {user, logOut} = useContext(AuthContext);
  console.log(user)

    const links = <>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/brands">Brands</NavLink> </li>
              {
                user && <li> <NavLink to="/profile">My-profile</NavLink> </li>
              }
                <li> <NavLink to="/about">About Dev</NavLink> </li>


                 </>


  return (
    <div className="w-11/12 mx-auto ">
      <div className="navbar bg-[#124E66]      text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#124E66] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            {
                links
            }

            </ul>
          </div>
          <a className="btn hidden btn-ghost text-xl md:flex hover:bg-inherit  ">DISCOUNT PRO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

           {
            links
           }
          </ul>
        </div>
        
        <div className="navbar-end">
          <div>
            <p>{user && user.email}</p>
          </div>
          <div className=" hover:bg-[#0f4155] p-1"> 
          {
            user && user?.email ? <button  onClick={logOut} className="btn font-semibold text-red-400 text-lg rounded-none btn-neutral" to="/" >LogOut</button> : <Link className="btn btn-neutral text-lg font-bold rounded-none text-[#50a7c9] " to="/auth/login" >Login</Link>
          }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
