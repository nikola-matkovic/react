import Nav from "../Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <p>Footer</p>
    </>
  );
};
export default Layout;
