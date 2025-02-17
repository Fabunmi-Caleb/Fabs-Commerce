import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

//layouts
import RootLayout from "./layouts/RootLayout.jsx";

//pages
import Home from "./pages/Home.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";

//Context Providers
import { UserProvider } from "./context/UserContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        
        {/* <Route path="*" element={}/> */} 
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </>
  )
);

function App() {  
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
