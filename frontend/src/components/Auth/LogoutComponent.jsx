import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import { userLogout } from "../../services/authService";
import { useUser } from "../../context/UserContext";

function LogoutComponent() {
  const {loading, setLoading} = useLoading();
  const [error, setError] = useState(null); //'error' is specfic to component(this error is a logoutError)
  const navigate = useNavigate();
  const {user, logout} = useUser();

  const handleLogout = async (e) => { 
    e.preventDefault();
    setLoading(true);
    try {
      const response = await userLogout();
      // console.log(response.data);

      logout(); //set the userData to null signifying the user officially logging out

      navigate("/");
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
      console.error("Logout failed:", err.response?.data || err.message);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <button className="border" onClick={handleLogout}>{loading ? "Logging Out..." : "Logout"}</button>
    </div>
)
}

export default LogoutComponent