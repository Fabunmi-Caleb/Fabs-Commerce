import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../services/authService";
import { useError } from "../hooks/useError";

const UserContext = createContext();

//custom hook to use the user context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {error, setError} = useError();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const login = (userData) => {
    setUser(userData); // Store the user data after logging in
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  const logout = () => {
    setUser(null); // Reset the user data to null on logout
    localStorage.removeItem("isLoggedIn");
  };

  const checkSession = async () => {
    try {
      if (!isLoggedIn) {
        logout();
        return false; // Skip the request if the user is not logged in
      }
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (err) {
      logout();
      setError(err.response ? err.response : err);
      console.error("Error fetching session");
    }
  };

  useEffect(() => {
    checkSession();
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
