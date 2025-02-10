import LogoutComponent from "../components/Auth/LogoutComponent";
import { NavLink, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

function RootLayout() {
  const {user} = useUser();

  return (
    <section className="root-layout">
      <header className="border">
        <nav className={user ? "hidden" : "space-x-5"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
        <nav className={user ? "block" : "hidden"}>
          <LogoutComponent />
        </nav>
      </header>
<br />
      <main>
        <Outlet />
      </main>
<br />
      <footer className="border">© 2025 Fabunmi Ibukunoluwa Caleb. All rights reserved.</footer>
    </section>
  )
}

export default RootLayout;