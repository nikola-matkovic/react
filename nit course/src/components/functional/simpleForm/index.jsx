import React from "react";
import { useState } from "react";

const SimpleForm = () => {
    const [inputs, setInputs] = useState({name : "", surName : ""});
    const hendleChange = (e) => {
        setInputs({ 
            ...inputs,  
            [e.target.id] : e.target.value
        });
    }
    return (
        <form action="" onSubmit={(e)=> {
            e.preventDefault();
            console.log(inputs.name, inputs.surName);
        }}>

            <label htmlFor="">Name</label>
            <input value={inputs.name} type="text" onChange={hendleChange} id="name"/>
            <label htmlFor="" >surname</label>
            <input value={inputs.surName} type="text"  onChange={hendleChange} id="surName" />
            <button type="submit" >Submit</button>
        </form>
    )
}
export default SimpleForm;