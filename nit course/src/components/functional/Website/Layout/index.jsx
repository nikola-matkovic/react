import Footer from "../Footer";
import Nav from "../Nav";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
