import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import Tabs from "./Tabs";

const Settings = () => {
  return (
    <Layout>
      <Tabs />
      <Outlet />
    </Layout>
  );
};

export default Settings;
