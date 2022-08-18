import Layout from "../Layout";
import { useNavigate } from "react-router-dom";

const User = () => {
  const location = useNavigate();
  useEffect(() => {
    const redirecToUsers = () => {
      if(location.state === null){
        location("/users", { state: user });
      }
    }
  },[])

  return (
    <Layout>

    </Layout>
  );
};

export default User;
