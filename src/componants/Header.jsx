import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/brands">Brands</NavLink>{" "}
      </li>
      {user && (
        <li>
          {" "}
          <NavLink to="/profile">My-profile</NavLink>{" "}
        </li>
      )}
      <li>
        {" "}
        <NavLink to="/about">About Dev</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto bg-[#124E66] ">
      <div className="navbar   text-white">
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
              {links}
            </ul>
          </div>
          <a className="btn hidden btn-ghost text-xl md:flex hover:bg-inherit  ">
            DISCOUNT PRO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {
            user && <div className="flex items-center">
            <p className="hidden md:flex ">{ user?.email}</p>
            <div className="avatar online mx-2">
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL}/>
              </div>
            </div>
          </div>
          }
          <div className="">
            {user && user?.email ? (
              <button
                onClick={logOut}
                className="btn font-semibold text-red-400 text-lg rounded-none btn-neutral"
                to="/"
              >
                LogOut
              </button>
            ) : (
              <div className="space-x-2">
                <Link
                  className=" bg-gray-800 py-2 px-3 text-lg font-bold rounded-none text-[#50a7c9] "
                  to="/auth/login"
                >
                  Login
                </Link>
                <Link
                  className=" bg-gray-800 py-2 px-3 text-lg font-bold rounded-none text-[#50a7c9] "
                  to="/auth/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {user && user?.email && (
        <p className="text-center pb-2 text-green-500 font-semibold">
          Welcome <span> {user.displayName} </span>
        </p>
      )}
    </div>
  );
};

export default Header;
