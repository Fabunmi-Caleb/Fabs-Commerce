import logo from "../../assets/images/logo.png"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { useError } from "../../hooks/useError";
import { useLoading } from "../../hooks/useLoading";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { userLogin } from "../../services/authService";
import { useUser } from "../../context/UserContext";

function LoginComponent() {
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const {error, setError} = useError();
 const {loading, setLoading} = useLoading();
 const {isPasswordVisible, togglePasswordVisibility, IoEye, IoMdEyeOff} = usePasswordToggle();
 const navigate = useNavigate();
 const {user, login} = useUser();
    
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userLogin(email,password);
      // console.log(response.data)

      const userData = {
        name: `${response.data.firstName} ${response.data.lastName}`,
      } //making a new obect so we can remove the (message-"Successfully logged in" and ust pass the needed user data)
      login(userData);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (err) {
      setError(err.response ? err.response : "An error occurred. Please try again.");
    }finally{
      setLoading(false);
    }
  }

  return (
  <section className="login-section">
    <div className="flex justify-center items-center mx-auto min-h-[100dvh] bg-primary">
    <div className="max-w-[29rem] min-h-[33rem] w-full mx-3 flex flex-col justify-center">
      {/* Fabs Commerce Logo */}
      <Link to="/" className="w-52 h-12 mb-5 mx-auto md:w-56 landscape:my-6"> 
        <img src={logo} alt="fabs-commerce logo" />
      </Link>
    <div className="rounded-md p-6 space-y-10 bg-white">
      <p className="font-medium text-center text-lg md:text-xl"><br /> Sign in with your email and password</p>
      <form onSubmit={handleLogin} className="space-y-7">
        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" required className="border w-full h-9 pl-2 rounded-sm" value={email} onChange={(e) => {setEmail(e.target.value)}}/><br />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <div className="flex border">
          <input type={isPasswordVisible ? "text" : "password"} id="password" required className="w-full h-9 pl-2 rounded-sm" value={password} onChange={(e) => {setPassword(e.target.value)}}/><br />
          <button className="mx-2 scale-110" onClick={togglePasswordVisibility}>{isPasswordVisible ? <IoMdEyeOff /> : <IoEye />}</button>
          </div>
        </div>
        <div>
          <button type="submit" disabled={loading} className="bg-primary text-white font-semibold w-full h-9 rounded-md hover:bg-[#70cc9f] hover:transition-all focus:bg-[#66bd93]">{loading ? "Logging In..." : "Login"}</button>
          {/* Error Message */}
          <p className="text-red-500 text-center mt-2 font-medium">{error ? error.status===429 ? "Too many login requests, please try again later" : "Invalid Login Credentials" : ""}</p>
        </div>
      </form>
      <p className="border border-[#6ecc9f] font-medium p-2 max-w-[16.2rem] mx-auto rounded-3xl">New to fabs commerce? <Link to="/signup" className="text-[#6ecc9f] ml-1">Sign Up</Link></p>
    </div>
    <div className="absolute bottom-0 inset-x-0 mb-5 flex justify-center landscape:relative landscape:mt-5"> {/* landscape:lg:absolute in case you change your mind about the position of the footer in landscape mode on larege devices */}
      <a href="https://github.com/Fabunmi-Caleb" target="_blank" className="font-medium text-center text-lg">&#169; 2025 Fabunmi Ibukunoluwa Caleb</a>
    </div>
    </div>
    </div>
  </section>


  )
    
}

export default LoginComponent