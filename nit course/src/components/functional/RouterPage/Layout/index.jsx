import { useState } from "react";

const Layout = (props) => {
    return (
        <>
            <p>Nav</p>
            {props.children}
            <p>footer</p>
        </> 
    );
}

export default Layout;