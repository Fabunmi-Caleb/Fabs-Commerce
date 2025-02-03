import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

//layouts
import RootLayout from "./layouts/RootLayout.jsx";
import RootLayoutCopy from "./layouts/RootLayoutCopy.jsx";

//pages
import Home from "./pages/Home.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";

//Context Providers
import { UserProvider } from "./context/UserContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PreviousRouteProvider } from "./context/PreviousRouteContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayoutCopy />}>
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
      <AuthProvider>
        <UserProvider>
          <PreviousRouteProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </PreviousRouteProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
