import { PreviousRouteContext } from "../context/PreviousRouteContext.jsx";
import { useContext } from "react";

// Custom hook to use the Previous Route Context
export const usePreviousRoute = () => useContext(PreviousRouteContext);