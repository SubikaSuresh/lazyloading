import { useUserStore } from "../store/userStore";
import "../styles/Home.css";

const Home = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="home">
      <h1>Welcome {user ? user : "to the Image Gallery"}</h1>
      <p>Explore amazing images in categories like Travel, Art, Food, and Books.</p>
    </div>
  );
};

export default Home;
