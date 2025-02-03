import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import {useError} from "../../hooks/useError";
import { userLogin } from "../../services/authService";
import { useUser } from "../../context/UserContext";

function LoginComponent() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {error, setError} = useError();
  const {loading, setLoading} = useLoading();
  const navigate = useNavigate();
  const {user, login} = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userLogin(email,password);
      console.log(response.data)

      const userData = {
        name: `${response.data.firstName} ${response.data.lastName}`,
      } //making a new obect so we can remove the (message-"Successfully logged in" and ust pass the needed user data)
      login(userData);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
      console.error("Login failed:", err.response?.data || err.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <section className="login-section">
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required className="border" value={email} onChange={(e) => {setEmail(e.target.value)}}/><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required className="border" value={password} onChange={(e) => {setPassword(e.target.value)}}/><br />
        <button type="submit" disabled={loading} className="border">{loading ? "Logging In..." : "Login"}</button>
      </form>
        <p>New to fabs commerce? <Link to="/signup" className="text-blue-700">Sign Up</Link></p>
        <Link to="/" className="text-blue-700">Go back home</Link>
    </section>
  )
}

export default LoginComponent