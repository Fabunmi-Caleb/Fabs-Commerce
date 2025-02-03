import { useUser } from "../context/UserContext.jsx";

function Home() {
  const { user } = useUser();

  return (
    <>
      <div>{user ? `Welcome ${user.name}` : "Home"}</div>
    </>
  );
}

export default Home;
