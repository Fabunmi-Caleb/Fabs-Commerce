import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { registerUser } from "../../services/authService";
import { useUser } from "../../context/UserContext";

function SignupComponent() {
    const [basicData, setBasicData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
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
    const {isPasswordVisible, togglePasswordVisibility} = usePasswordToggle();
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
        phone: "",
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
          <form onSubmit={handleUserRegistration}>
            {/* Basic Details */}
            <div>
              <h3>Basic Details</h3>
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" required value={basicData.firstName} onChange={handleBasicDataChange} />
              <label htmlFor="lastName">Lastname *</label>
              <input type="text" id="lastName" required value={basicData.lastName} onChange={handleBasicDataChange} />
            </div>
    
            <br />
    
            {/* Login Details */}
            <div>
              <h3>Login Details</h3>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required value={basicData.email} onChange={handleBasicDataChange} />
              <label htmlFor="password">Password *</label>
              <input type={isPasswordVisible ? "text" : "password"} id="password" required value={basicData.password} onChange={handleBasicDataChange} />
              <button onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? <IoEye /> : <IoMdEyeOff />}
              </button>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" required  value={basicData.phone} onChange={handleBasicDataChange}/>
            </div>
    
            <br />
    
            {/* Addresses */}
            {/* Home Address */}
            <div>
              <h3>Home Address Details</h3>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" value={addressData.address.street} onChange={handleAddressDataChange}/>
              <label htmlFor="state">State</label>
              <input type="text" id="state" value={addressData.address.state} onChange={handleAddressDataChange}/>
              <label htmlFor="city">City</label>
              <input type="text" id="city" value={addressData.address.city} onChange={handleAddressDataChange}/>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" value={addressData.address.country} onChange={handleAddressDataChange}/>
            </div>
    
            <br />
    
            {/* Shipping Address */}
            <div>
              <h3>Shipping Address Details</h3>
              <input type="checkbox" name="" id="useSameShip" checked={addressData.useSameShip} onChange={handleAddressDataChange} />
              <label htmlFor="useSameShip">
                Use home address as shipping address
              </label>
              <br />
              <label htmlFor="ship-street">Street</label>
              <input type="text" id="ship-street" value={addressData.shippingAddress.street} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
              <label htmlFor="ship-state">State</label>
              <input type="text" id="ship-state" value={addressData.shippingAddress.state} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
              <label htmlFor="ship-city">City</label>
              <input type="text" id="ship-city" value={addressData.shippingAddress.city} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
              <label htmlFor="ship-country">Country</label>
              <input type="text" id="ship-country" value={addressData.shippingAddress.country} onChange={handleAddressDataChange} disabled={addressData.useSameShip}/>
            </div>
    
            <br />
    
            <button className="border">{loading? "Signing Up..." : "Sign Up"}</button>
            <p>Already have an account?{" "}<Link to="/login" className="text-blue-700">Login</Link></p>
            <Link to="/" className="text-blue-700">Go back home</Link>
          </form>
        </section>
      );
}

export default SignupComponent