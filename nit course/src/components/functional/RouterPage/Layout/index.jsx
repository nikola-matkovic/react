import { useState } from "react";
import Nav from "../Nav";
const Layout = (props) => {
    return (
        <>
            <Nav />
            {props.children}
            <p>footer</p>
        </> 
    );
}

export default Layout;