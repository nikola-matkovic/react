import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const About = () => {
  const navigation = useNavigate();

  const redirectHome = () => {
    navigation("/", { state: { name: "suad" } });
  };

  return (
    <Layout>
      <p>About</p>
      <button onClick={redirectHome}>Do something then go to home</button>
    </Layout>
  );
};

export default About;
