import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "";

    // Logic to set the title based on the pathname
    switch (location.pathname) {
      case "/":
        title = "Fabs Commerce";
        break;
      case "/login":
        title = "Login to your account";
        break;
      case "/signup":
        title = "Signup for an account";
        break;
      default:
        title = "Fabs Commerce";
        break;
    }

    // Update the document title
    document.title = title;
  }, [location]); // Runs every time the location (URL) changes
};

export default useTitle;
