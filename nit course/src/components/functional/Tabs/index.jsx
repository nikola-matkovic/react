import { useState } from "react";
import style from "./style.module.css";

const Tabs = (props)  =>{
    const { tabContents, tabNames} = props;
    const otvoriContent = (index) => {
        setActiveTab(index);
    }
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <header>
                {
                    tabNames.map((tabName, index) => {
                        let classname
                        if(index === activeTab){
                          classname  = "activeTab";
                        }
                        return (
                            <div key={index}>
                                <button className={style[classname]} onClick={() => {otvoriContent(index)}}>{tabName}</button>
                            </div>
                        )
                    }
                )}
            </header>
            <main>
                <p>{tabContents[activeTab]}</p>
            </main>
        </div>
    );
}
export default Tabs;