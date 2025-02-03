import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const PreviousRouteContext = createContext();

export const PreviousRouteProvider = ({children}) => {
  const [previousRoute, setPreviousRoute] = useState(null);
  // const location = useLocation(); //get the current location 

  // useEffect(() => {
  //   // Update the previous route whenever the location changes
  //   setPreviousRoute(location.pathname);
  // }, [location]);

  return (
    <PreviousRouteContext.Provider value={{previousRoute, setPreviousRoute}}>
      {children}
    </PreviousRouteContext.Provider>
  )
}