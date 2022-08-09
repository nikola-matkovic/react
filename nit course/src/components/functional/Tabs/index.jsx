import { useState } from "react";
import style from "./tabs.module.css";
const Tabs = (props) => {
  const { onChange, tabsList } = props;
  const [selected, setSelected] = useState(0);

  const handleChange = (index, title) => {
    setSelected(index);

    if (onChange) {
      onChange(title);
    }
  };

  return (
    <div className={style.tabsContainer}>
      {tabsList.length > 0 &&
        tabsList.map((title, index) => {
          return (
            <div
              className={`${style.tabItem} ${
                selected === index ? style.active : ""
              }`}
              onClick={() => handleChange(index, title)}
              key={index}
            >
              <p>{title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tabs;
