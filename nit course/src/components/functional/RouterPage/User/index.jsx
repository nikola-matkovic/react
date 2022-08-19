import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const User = () => {
  const location = useNavigate();
  useEffect(() => {
    const redirecToUsers = () => {
      if(location.state === null){
        location("/users", { state:null });
      }
    }
    redirecToUsers();
  },[])

  return (
    <Layout>

    </Layout>
  );
};

export default User;
