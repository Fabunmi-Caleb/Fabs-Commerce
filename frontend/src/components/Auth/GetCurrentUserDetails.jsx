import { useState } from "react";
import { getCurrentUser } from "../../services/authService";

function GetCurrentUserDetails() {
  const [loading, setLoading] = useState(false); //'loading' state is specific to this component (this loading state is userDetailsLoading)
  const [error, setError] = useState(null); //'error' is specfic to component(this error is a userDetailsError)

  const getUserDetails = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await getCurrentUser();
      console.log(res.data.user);
    } catch (err) {
      setError(err.response?.data || "An error occurred. Please try again.");
      console.error("User Data Retrieval failed:", err.response?.data || err.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div>
      <button className="border" onClick={getUserDetails}>{loading ? "Getting User Details" : "Get Users Details"}</button><br />
    </div>
  )
}

export default GetCurrentUserDetails