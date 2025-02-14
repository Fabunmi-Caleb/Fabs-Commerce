import LogoutComponent from "../components/Auth/LogoutComponent";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import logo from "../assets/images/logo.png";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {user} = useUser();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Close the sidebar if the window is wider than 1024px
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
  <section className="root-layout border border-red-500">
    <div className="max-w-[76rem] mx-auto px-5 border border-green-500">
      
      <header className="border border-blue-500 min-h-16 flex justify-between items-center">
        <NavLink to="/" ><img src={logo} alt="fabs-commerce logo" className="w-[11.5rem] h-12 border" /></NavLink>
        
        {/* Navbar On Large Screens */}
        <div className="lg:flex lg:justify-between lg:items-center xl:w-4/5 lg:w-[77%] hidden">
          <nav className="border space-x-10 font-medium">
          <NavLink to="food">Food</NavLink>
          <NavLink to="/gadgets">Gadgets</NavLink>
          <NavLink to="/clothing">Clothing</NavLink>
          </nav>
          <form className="max-w-[23.4375rem] xl:w-full lg:w-[40%] ">
          <div className="flex items-center border border-black rounded-md pl-2">
            <IoSearchOutline className="size-5"/>
            <input type="text" placeholder="Search for products" className="border-none w-full rounded-md min-h-9 pl-2 outline-none" />
          </div>
          </form>
          <nav className={user ? "hidden" : "border font-medium space-x-7 w-[7.5rem]"}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          </nav>
          <nav className={user ? "border font-medium flex space-x-8 w-[7.5rem]" : "hidden"} >
          <a href="/profile" className="flex flex-col items-center"><IoPersonOutline className="size-5" />Profile</a>
          <a href="/cart" className="flex flex-col items-center"><FiShoppingCart className="size-5" />Cart</a>
          {/* <LogoutComponent /> include it in the profile */}
          </nav>
        </div>

        {/* Sidebar for smaller screens */}
        <div className={`sidebar flex flex-col justify-center fixed top-0 right-0 w-full px-5 transition-transform duration-300 bg-white h-full border border-black lg:hidden  ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <IoMdClose onClick={toggleSidebar} className={`size-8 absolute top-0 right-0 border m-5`}  />
          <div className="flex flex-col min-h-3/4 items-center border border-blue-500 space-y-16 landscape:overflow-auto landscape:pt-[3.25rem] landscape:pb-2">
            <nav className="flex flex-col items-center border md:text-xl text-lg font-medium space-y-14">
              <NavLink to="food">Food</NavLink>
              <NavLink to="/gadgets">Gadgets</NavLink>
              <NavLink to="/clothing">Clothing</NavLink>
            </nav>
            <nav className={user ? "hidden" : "border font-medium md:text-xl text-lg space-x-14"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            </nav>
            <nav className={user ? "border flex font-medium md:text-xl text-lg space-x-16" : "hidden"}>
            <a href="/profile" className="flex flex-col items-center"><IoPersonOutline className="size-6" />Profile</a>
            <a href="/cart" className="flex flex-col items-center"><FiShoppingCart className="size-6" />Cart</a>
            {/* <LogoutComponent /> include it in the profile */}
            </nav>
            <form className="max-w-[23rem] w-full">
              <div className="border border-black flex items-center pl-2 mx-5 rounded-md">
                <IoSearchOutline className="size-5"/>
                <input type="text" placeholder="Search for products" className="border-none rounded-md w-full min-h-10 pl-2 outline-none"/>
              </div>
            </form>
          </div>
        </div>

        <FiMenu className="size-7 cursor-pointer lg:hidden" onClick={toggleSidebar}/>
      </header>

<br />

      <main className="border border-black">
        <Outlet />
        {user ? <LogoutComponent /> : ""}
      </main>

<br />

      <footer className="border border-purple-500">
        <div className="md:flex justify-between">
          <div className="border md:block md:justify-items-center md:content-center hidden">
            <NavLink to="/" ><img src={logo} alt="fabs-commerce logo" className="w-[11.5rem] h-12" /></NavLink>
            <p className="italic">Shop smart, Live Easy</p>
          </div>
          <div className="border justify-items-center md:max-w-[17rem] md:w-full space-y-3">
            <p className="my-3 font-medium text-center">Check out more of my work:</p>
            <a href="https://www.linkedin.com/in/fabunmi-caleb/" target="_blank" className="flex items-center justify-center md:w-full screen570:w-3/5 w-full rounded-sm p-1 border border-black"><FaLinkedin className="size-5 mr-1"/> LinkedIn</a>
            <a href="https://github.com/Fabunmi-Caleb" target="_blank" className="flex items-center justify-center md:w-full screen570:w-3/5 w-full rounded-sm p-1 border border-black"><FaGithub className="size-5 mr-1"/> Github</a>
          </div>
        </div>

        <div className="border text-center py-3">
          <a href="https://github.com/Fabunmi-Caleb" target="_blank" className="font-medium text-lg" >© {new Date().getFullYear()} Fabunmi Ibukunoluwa Caleb<span className="screen570:inline hidden">. All Rights Reserved</span></a>
        </div>
      </footer>

    </div>
  </section>
  )
}

export default RootLayout;