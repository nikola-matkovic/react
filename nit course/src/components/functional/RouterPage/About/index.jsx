import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../Layout";
const About = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    return (
        <Layout>
            HOME
            <button onClick={() => goToHome()}>Do something and go to home</button>
        </Layout> 
    );
}

export default About;