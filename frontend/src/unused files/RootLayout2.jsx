import { axiosWithCredentials } from "../utils/axiosMods.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
// Icons
import {
  IoPersonOutline,
  IoCartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai"; //put logoout in the profile section
import { useAuth } from "../hooks/authHook.js";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext.jsx";
import LogoutComponent from "../components/Auth/LogoutComponent.jsx";

const RootLayout2 = () => {
  const { isLoggedIn, logout } = useAuth();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosWithCredentials.post(`${apiUrl}/auth/logout`);
      console.log(response.data);
      logout();
      toast.success("Logout Successful!");
    } catch (err) {
      if (err.response) {
        console.error(`Error: ${err.response.data}`);
      } else {
        console.log(`Error: ${err}`);
      }
    }
  };

  const { user } = useUser();

  return (
    <div className="root-layout px-20 border border-black">
      <header className="flex justify-between border border-green-600 h-[60px]">
        <div className="flex items-center space-x-16">
          <NavLink to="/">
            <img src={logo} alt="fabs-commerce logo" className="h-12" />
          </NavLink>
          <nav className="space-x-6">
            <NavLink to="/clothing">Clothing</NavLink>
            <NavLink to="/gadgets">Gadgets</NavLink>
            <NavLink to="food">Food</NavLink>
          </nav>
        </div>

        <div className="flex justify-end items-center space-x-16">
          <form
            action=""
            method=""
            className="flex items-center space-x-1 px-2 border border-primary rounded-md"
          >
            <IoSearchOutline className="size-6" />
            <input
              name=""
              type="text"
              placeholder="Search for products"
              className="outline-none rounded-md w-96 h-9 px-3"
            />
            {/* Submit the form when the user clicks enter */}
          </form>
          <div
            className={
              user ? "hidden" : "space-x-7 text-lg p-2 border border-black"
            }
          >
            <NavLink to="/login" className="border border-black p-1">
              Login
            </NavLink>
            <NavLink to="/signup" className="border border-black p-1">
              SignUp
            </NavLink>
          </div>
          <div className={user ? "flex space-x-10" : "hidden"}>
            {" "}
            {/* Set up logic that when the user is logged in it displays this and hides the login and regisyer links above */}
            <div className="flex flex-col items-center p-[1px]">
              <IoPersonOutline className="size-7 mb-[2px]"></IoPersonOutline>
              Profile
            </div>
            <div className="flex flex-col items-center p-[1px]">
              <IoCartOutline className="size-7 mb-[2px]"></IoCartOutline>
              Cart
            </div>{" "}
            <div className="flex flex-col items-center p-[1px] hover:cursor-pointer">
              <AiOutlineLogout className="size-7 mb-[2px]"></AiOutlineLogout>
              <LogoutComponent>Logout</LogoutComponent>
            </div>{" "}
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border border-red-600">
        <div className="flex space-x-32">
          <div className="space-y-2">
            <h4 className="text-xl">Have a project you'd like to work on?</h4>
            <h4 className="text-xl">Send a mail:</h4>
            <form action="" method="" className="space-y-2">
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name=""
                  placeholder="email"
                  className="border border-blue-600 outline-none w-72 h-10 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  name=""
                  id="message"
                  className="border border-blue-600 outline-none w-72 h-24"
                ></textarea>
              </div>
              <button className="border border-teal-600 px-4 py-1 rounded-sm">
                Send
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-10 justify-center">
            <h4 className="text-xl">Get to know more about me:</h4>
            <a href="" className="flex items-center border border-black p-1">
              <FaGithub className="size-7 mr-[9px]" />
              Github
            </a>
            <a href="" className="flex items-center border border-black p-1">
              <FaLinkedin className="size-7 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border border-yellow-500 flex justify-center items-center space-x-5">
          <img src={logo} alt="fabs-commerce logo" className="h-12" />
          <h4 className="text-lg font-semibold">
            © 2025 Fabunmi Ibukunoluwa Caleb. All rights reserved.
          </h4>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout2;
