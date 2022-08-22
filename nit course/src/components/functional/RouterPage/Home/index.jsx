import { useLocation } from "react-router-dom";
import Layout from "../Layout";

const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Layout>
      <p>Home</p>
      {location.state && <p>{location.state.name}</p>}
    </Layout>
  );
};

export default Home;
