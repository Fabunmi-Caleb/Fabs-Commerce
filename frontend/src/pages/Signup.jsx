import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Signup() {
  return (
    <section className="signup flex flex-col px-52 h-screen justify-center">
    <div className="p-2 rounded-md bg-white">   

    <div className="flex items-center">
      <NavLink to="/" className=""><img className="h-12 mx-auto inline-block" src={logo} alt="fabs-commerce logo" /></NavLink>
      <h1 className="my-2  ml-40 text-2xl text-center">Sign Up for an Account</h1>
    </div>

      {/* Sign Up form */}
      <form action="" method="">
        <div className="border border-[#aca7a7] rounded-sm">
        {/* Basic Details */}
        <div className="my-4 flex justify-center space-x-14">

        <div>
          <label className="text-lg" htmlFor="firstname">First  Name</label><br />
          <input className="w-72 h-10" type="text" id="firstname"/><br />
        </div>

        <div>
          <label className="text-lg" htmlFor="lastname">Last Name</label><br />
          <input className="w-72 h-10" type="text" id="lastname" />
        </div>

        </div>

        {/* Login Details */}
        <div className="my-4 flex flex-col items-center space-y-5">

        <div className="flex items-center space-x-[104px]">
          <label className="text-lg w-36" htmlFor="email">Email Address</label>
          <input className="w-96 h-10" type="email" id="email" />
        </div>

        <div className="flex items-center space-x-[104px]">
          <label className="text-lg w-36" htmlFor="password">Password</label>
          <input className="w-96 h-10" type="password" id="password" />
        </div>

        <div className="flex items-center space-x-[104px]">
          <label className="text-lg w-36" htmlFor="phone">Phone Number</label>
          <input className="w-96 h-10" type="text" id="phone" />
        </div>

        </div>

        </div>
        {/* Addresses */}
        <div className="flex justify-between my-4">
        {/* Home Address */}
        <div className="p-2 border border-[#aca7a7] rounded-sm">
        <h4 className="text-xl my-2">Home Address</h4>

        <div className="flex space-x-5">
        <div>
          <label className="text-lg" htmlFor="street">Street</label><br />
          <input className="w-52 h-10" type="text" id="street"/><br />
        </div>
        <div>
          <label className="text-lg" htmlFor="city">City</label><br />
          <input className="w-52 h-10" type="text" id="city" /><br />
        </div>
        </div>

        <div className="flex space-x-5">
        <div>
          <label className="text-lg" htmlFor="state">State</label><br />
          <input className="w-52 h-10" type="text" id="state" /><br />
        </div>
        <div>
          <label className="text-lg" htmlFor="country">Country</label><br />
          <input className="w-52 h-10" type="text" id="country"/>
        </div>
        </div>

        </div>

        {/* Shipping Address */}
        <div className="p-2 border border-[#aca7a7] rounded-sm">
        <div className="flex space-x-3 my-2">
            <h4 className="text-xl">Shipping Address</h4>

          <div className="flex items-center space-x-1">
            <input className="size-[14px]" type="checkbox" name="" id="ship-address" />
            <label className="text-lg" htmlFor="ship-address">Use home address for shipping</label>
          </div>
        </div>

        <div>

        <div className="flex space-x-5">
        <div>
          <label className="text-lg" htmlFor="ship-street">Street</label><br />
          <input className="w-52 h-10" type="text" id="ship-street"/><br />
        </div>
        <div>
          <label className="text-lg" htmlFor="ship-city">City</label><br />
          <input className="w-52 h-10" type="text" id="ship-city" /><br />
        </div>
        </div>

        <div className="flex space-x-5">
        <div>
          <label className="text-lg" htmlFor="ship-state">State</label><br />
          <input className="w-52 h-10" type="text" id="ship-state" /><br />
        </div>
        <div>
          <label className="text-lg" htmlFor="ship-country">Country</label><br />
          <input className="w-52 h-10" type="text" id="ship-country"/>
        </div>
        </div>

        </div>
        </div>

        </div>
        {/* End of Form */}

        <div className="flex justify-between items-end">
        <button className="ml-[420px] border border-black w-28 p-2 rounded-sm">Submit</button>
        <p className="text-lg border border-[#aca7a7] rounded-md w-[265px] flex items-center justify-center h-10 text-right">Already have an account?<NavLink className="ml-2 font-semibold" to="/login">Login</NavLink></p>
        </div>
      </form>
      </div>
    </section>
  );
}

export default Signup;
