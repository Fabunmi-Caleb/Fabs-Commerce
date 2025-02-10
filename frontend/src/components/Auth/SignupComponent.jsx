import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";
import { registerUser } from "../../services/authService";
import { useUser } from "../../context/UserContext";
import { IoChevronForward } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import logo from "../../assets/images/logo.png";


function SignupComponent() {
    const [basicData, setBasicData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const [addressData, setAddressData] = useState({
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
      },
      shippingAddress: {
        street: "",
        city: "",
        state: "",
        country: "",
      },
      useSameShip: false,
    });
    const [addressVisible, setAddressVisible] = useState(false);
    const {isPasswordVisible, togglePasswordVisibility, IoEye, IoMdEyeOff} = usePasswordToggle();
    const {loading , setLoading} = useLoading();
    const {error, setError} = useError();
    const {user, login} = useUser();
    const navigate = useNavigate();

    const handleUserRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //clean address data was made to ensure if we leave the address empty, it doesnt send an empty obect to the backend but instead sends nothing(undefined)
      const cleanAddressData = {
        ...addressData,
        address: Object.values(addressData.address).every(val => val.trim() === "") 
          ? undefined 
          : addressData.address,
        shippingAddress: Object.values(addressData.shippingAddress).every(val => val.trim() === "") 
          ? undefined 
          : addressData.shippingAddress,
      };      
      const combinedUserData = {...basicData, ...cleanAddressData};
      const response = await registerUser(combinedUserData);
      // console.log(response.data);
    
      const userData = {
        name: `${response.data.firstName} ${response.data.lastName}`,
      } //making a new obect so we can remove the (message-"Successfully logged in" and ust pass the needed user data)
      login(userData);

      //clear inputs
      setBasicData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setAddressData({
        address: {
          street: "",
          city: "",
          state: "",
          country: "",
        },
        shippingAddress: {
          street: "",
          city: "",
          state: "",
          country: "",
        },
        useSameShip: false,
      });

      navigate("/")
    } catch (err) {
        setError(err.response?.data || "An error occurred. Please try again.");
        console.error("Registration failed:", err.response?.data || err.message);
    }finally{
        setLoading(false);
    }
    };

    const handleBasicDataChange = (e) => {
        const {id, value} = e.target; //get the id because it is what we are using to indentify each input and as a way to dynamically put our state variables/peoperties (like firstName, email)
        setBasicData((basicData) => ({ //dont forget basic data is the previous value of basic data
          ...basicData,
          //id is in square brackets because we are telling avascript that it is not ust a string "id" or a string "firstName" but rather it is a obect property name or a key in basic terms
          [id]: value  
        }))
    }

    const handleAddressDataChange = (e) => {
        const {id, value } = e.target;
    
        // Handle checkbox (useSameShip) change
        if (id === "useSameShip") {
          setAddressData((addressData) => ({
            ...addressData,
            useSameShip: e.target.checked,
            shippingAddress: e.target.checked
            ? { ...addressData.address } //if useSameShip is checked, spread the content of home address into shipping address
            : {street: "", state: "", city: "", country: ""}, 
          }))
        }else{
           // Handle address field changes
           const isShipping = id.startsWith("ship-"); // Check if it's for shipping address
           const fieldName = isShipping ? id.replace("ship-", "") : id; //remove the ship prefix because in the backend model, there is no ship prefix
    
           //explanation on the different roles the square brackets play on lines 76 and 77 are explained in the anything.txt file
           setAddressData((addressData) => ({
             ...addressData,
             [isShipping ? "shippingAddress" : "address"]: { 
               ...addressData[isShipping ? "shippingAddress" : "address"], //e.g. if it was shipping address, this would essentially be the same thing as ...addressData.shippingAddress
               [fieldName]: value,
             },
           }));
         }
    }

    return (
    <section className="signup-section">
      <div className="min-h-[100dvh] flex justify-center items-center bg-primary">
        <div className="w-full max-w-[45rem] mx-3">
          {/* Fabs Commerce Logo */}
          <Link to="/" className="w-56 h-12 my-5 md:my-7 block mx-auto"> 
            <img src={logo} alt="fabs-commerce logo" />
          </Link>
          <form onSubmit={handleUserRegistration} className="space-y-4 p-4 bg-white rounded-md">
            
            {/* Basic Details */}
            <div className="">
              <h3 className="text-lg font-medium mb-1">Basic Details:</h3>
              <div className="md:flex md:space-x-10 md:space-y-0 space-y-2">
                <div className="w-full">
                  <label htmlFor="firstName">First Name <span className="text-red-500">*</span></label><br />
                  <input type="text" id="firstName" className="w-full h-9 pl-2" required value={basicData.firstName} onChange={handleBasicDataChange} /><br />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName">Lastname <span className="text-red-500">*</span></label><br />
                  <input type="text" id="lastName" className="w-full h-9 pl-2" required value={basicData.lastName} onChange={handleBasicDataChange} />
                </div>
              </div>
            </div>
        
            {/* Login Details */}
            <div className="">
              <h3 className="text-lg font-medium mb-1">Login Details:</h3>
              <div className="md:flex md:space-x-10 md:space-y-0 space-y-2">
                <div className="w-full">
                  <label htmlFor="email">Email <span className="text-red-500">*</span></label><br />
                  <input type="email" id="email" className="w-full h-9 pl-2" required value={basicData.email} onChange={handleBasicDataChange} />
                </div>
                <div className="w-full md:h-[3.75rem]">
                  <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                  <div className="flex border rounded-sm h-9">
                    <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder="At least 6 Characters" className="border-none w-full pl-2" required value={basicData.password} onChange={handleBasicDataChange} />
                    <button onClick={togglePasswordVisibility} className="mx-2">
                      {isPasswordVisible ? <IoEye /> : <IoMdEyeOff />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        
            {/* Addresses */}
          <div className={`border border-primary rounded-md transition-all duration-300 overflow-hidden ${addressVisible ? "md:max-h-[27rem] max-h-[44rem]": "max-h-[2.675rem]"}`}>
            {/* Address Toggle */}
            <div className="flex justify-between items-center p-2">
              <h3 className="text-lg font-medium">Address Details:</h3>
              <button onClick={(e)=> {e.preventDefault(), setAddressVisible(!addressVisible)}}>
                 <IoChevronForward className={`transition-transform ${addressVisible ? "rotate-90 size-6" : "size-6"}`}/>
              </button>
            </div>

          {/* Combined Addresses Div */}
            <div className="space-y-3 px-2">
            {/* Home Address */}
            <div className="">
              <h3 className="text-lg font-medium mb-1 flex">Home Address: <GoInfo className="md:block md:size-[18px] md:ml-1 md:cursor-pointer hidden" title="Home Address is not required but all fields must be filled if you decide to fill it" /> </h3>
              {/* Street and State Div */}
              <div className="md:flex md:space-x-10 md:space-y-0 space-y-2">
                <div className="w-full">
                  <label htmlFor="street">Street</label><br />
                  <input type="text" id="street" className="w-full h-9 pl-2" value={addressData.address.street} onChange={handleAddressDataChange}/>
                </div>
                <div className="w-full">
                  <label htmlFor="state">State</label><br />
                  <input type="text" id="state" className="w-full h-9 pl-2" value={addressData.address.state} onChange={handleAddressDataChange}/>
                </div>
              </div>
              {/* City and Country Div */}
              <div className="md:flex md:space-x-10 md:space-y-0 mt-3 space-y-2">
                <div className="w-full">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" className="w-full h-9 pl-2" value={addressData.address.city} onChange={handleAddressDataChange}/>
                </div>
                <div className="w-full">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" className="w-full h-9 pl-2" value={addressData.address.country} onChange={handleAddressDataChange}/>
                </div>
              </div>
            </div>
        
            {/* Shipping Address */}
            <div className="">
              <h3 className="text-lg font-medium flex">Shipping Address: <GoInfo className="md:block md:size-[18px] md:ml-1 md:cursor-pointer hidden" title="Shipping Address is not required but all fields must be filled if you decide to fill it" /></h3>
              <div className="flex items-center space-x-1 my-2">
                <input type="checkbox" name="" id="useSameShip" className="hover:cursor-pointer size-[0.9rem]" checked={addressData.useSameShip} onChange={handleAddressDataChange} />
                <label htmlFor="useSameShip" className="hover:cursor-pointer font-medium">Use home address as shipping address</label>
              </div>
              {/* Shipping Street and State Div */}
              <div className="md:flex md:space-x-10 md:space-y-0 space-y-2">
                <div className="w-full">
                  <label htmlFor="ship-street">Street</label><br />
                  <input type="text" id="ship-street" className={addressData.useSameShip ? "cursor-not-allowed w-full h-9 pl-2" : "w-full h-9 pl-2"} value={addressData.shippingAddress.street} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
                </div>
                <div className="w-full">
                  <label htmlFor="ship-state">State</label><br />
                  <input type="text" id="ship-state" className={addressData.useSameShip ? "cursor-not-allowed w-full h-9 pl-2" : "w-full h-9 pl-2"} value={addressData.shippingAddress.state} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
                </div>
              </div>
              {/* Shipping City and Country Div */}
              <div className="md:flex md:space-x-10 md:space-y-0 mt-3 mb-5 space-y-2">
                <div className="w-full">
                  <label htmlFor="ship-city">City</label>
                  <input type="text" id="ship-city" className={addressData.useSameShip ? "cursor-not-allowed w-full h-9 pl-2" : "w-full h-9 pl-2"} value={addressData.shippingAddress.city} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
                </div>
                <div className="w-full">
                  <label htmlFor="ship-country">Country</label>
                  <input type="text" id="ship-country" className={addressData.useSameShip ? "cursor-not-allowed w-full h-9 pl-2" : "w-full h-9 pl-2"} value={addressData.shippingAddress.country} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
                </div>
              </div>
            </div> 
      
          </div>
          </div>
          
          <div className="flex flex-col items-center space-y-10">
            <div className="w-full flex flex-col items-center space-y-4 mt-3">
            <button className="md:w-1/2 w-full h-9 rounded-md font-medium bg-primary text-white hover:bg-[#70cc9f] hover:transition-all focus:bg-[#66bd93]">{loading? "Signing Up..." : "Sign Up"}</button>
            {/* Error Message */}
            <p className="text-red-500 font-medium">
              {error ? `Signup Error: ${error}`: ""}
            </p>
            <p className="font-medium border border-[#6ecc9f] p-2 rounded-3xl">Already have an account?{" "}<Link to="/login" className="text-[#6ecc9f]">Login</Link></p>
            </div>
          </div>
          </form>
          <div className={`text-center mt-8 ${addressVisible ? "mb-4" : ""}`}>
            <a href="https://github.com/Fabunmi-Caleb" target="_blank" className="font-medium text-lg">&#169; 2025 Fabunmi Ibukunoluwa Caleb</a>
          </div>
        </div>
      </div>
    </section>
    );
}

export default SignupComponent