import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const Users = () => {
  const arrayUsers = [
    { id: 1, name: "Suad Suljovic", job: "Developer" },
    { id: 2, name: "Suad Suljovic1", job: "Developer1" },
    { id: 3, name: "Suad Suljovic2", job: "Developer2" },
    { id: 4, name: "Suad Suljovic3", job: "Developer3" },
  ];
  const navigation = useNavigate();

  const navigateToUser = (user) => {
    navigation("/user", { state: user });
  };
  return (
    <Layout>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {arrayUsers.map((item) => {
          return (
            <div
              key={item.id}
              style={{ width: 300, height: 200, border: "1px solid black" }}
            >
              <p>Name: {item.name}</p>
              <p>Job: {item.job}</p>
              <button onClick={() => navigateToUser(item)}>See more</button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Users;
