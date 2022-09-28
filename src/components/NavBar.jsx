import { Link } from "react-router-dom";
import Logo from "../assets/digital_ist.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header className="border-b">
      <div className="max-w-screen-xl mx-auto flex justify-between  p-3  items-center">
        <Link to="/" className="inline-flex items-center ">
          <img className="  w-8 cursor-pointer" src={Logo} alt="Logo" />
          <span className="md:ml-3 ml-2  font-bold">My Money</span>
          <span className=" italic border-l ml-4 pl-4 hidden md:block ">
            financial expenses list
          </span>
        </Link>
        <nav className="  flex items-center justify-end  flex-1 ">
          {!user && (
            <>
              <Link
                to="/login"
                className="  text-indigo-500  py-1 px-3 focus:outline-none hover:text-indigo-900   text-base  "
              >
                <span className="hover-underline-animation">Login</span>
              </Link>
              <Link
                to="/register"
                className="  text-indigo-500  py-1 px-3 focus:outline-none hover:underline   ml-2 hover:text-indigo-900 transform scale-1 "
              >
                <span className="hover-underline-animation"> Register</span>
              </Link>
            </>
          )}
          {user && (
            <>
              <span className=" mr-2"> hello, {user.displayName} </span>
              <button
                className="  text-indigo-500 border border-indigo-500 px-2 focus:outline-none hover:bg-indigo-600 hover:text-white rounded  "
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
