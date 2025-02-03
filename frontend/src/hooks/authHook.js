import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
