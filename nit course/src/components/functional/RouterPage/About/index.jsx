import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const About = () => {
  const navigation = useNavigate();

  const redirectHome = () => {
    navigation("/", { state: { name: "Nikola" } });
  };

  return (
    <Layout>
      <h1>About</h1>
      <p>
      
      </p>
    </Layout>
  );
};
  
export default About;
