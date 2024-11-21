import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto bg-[#4988a1] py-6 relative  h-96 ">
      <div className="text-left mx-4 py-7 text-white">
        <p className="text-2xl font-bold">Wellcome {user.displayName} </p>
        <p className="font-semibold text-lg">We're thrilled to have you here.Let us help you find exactly what you're looking for enjoy your journey with us!</p>
      </div>
      <div className="hero bg-[#124e66] text-white rounded-xl w-10/12 sm:w-8/12 p-6 absolute left-1/2 -translate-x-1/2">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar online">
            <div className="w-36 md:w-72 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{user.displayName}</h1>
            <p className="py-6">{user.email}</p>
            <Link to="/profile/update" className="btn btn-neutral rounded-none">
            Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
