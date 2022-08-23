import { Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Page404 from "./Page404";
import Team from "./Team";
import Users from "./Users";
import User from "./User";
import Product from "./Product";
import Settings from "./Seetings";

const RouterPage = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />

        <Route path="/settings" element={<Settings />}>
          <Route index element={<p>nesto</p>} />
          <Route path="general" element={<p>general</p>} />
          <Route path="user" element={<p>user</p>} />
          <Route path="messages" element={<p>messages</p>} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};
export default RouterPage;
