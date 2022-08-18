import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const users = [
  {name: "Nikola", Surname: "matković", age: 19,job:"programmer"},
  {name: "suad", Surname: "suljović", age: 28, job:"programmer"},
  {name: "ramiz", Surname: "sabović", age: 20,job:"programmer"}
]


const Users = () => {
  const navigation = useNavigate();
  const navigateToUser = (user) =>{
    navigation("/user", { state: user });
  }
  return (
    <Layout>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}>
      {
        users.map((user, id) => {
          return (
            <div key = {id} style={{width: 300, height: 300, border: "1px solid black", margin: 10}}>
              <h1>{user.name} {user.Surname}</h1>
              <p>{user.age}</p>
              <p>{user.job}</p>
              <button onClick={()=> {navigateToUser(user)}}>See more</button>
            </div>
          )
        })
      }
      </div>
    </Layout>
  );
};

export default Users;
