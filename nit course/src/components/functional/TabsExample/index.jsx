import { useState } from "react";
import Tabs from "../Tabs";

const TabsExample = (props) => {
  const [selectedTab, setSelectedTab] = useState("Item 1");
  const array = ["Item 1", "Dva tri", "Nesto juce"];
  
  return (
    <div>
      <Tabs onChange={(title) => setSelectedTab(title)} tabsList={array} />
      {selectedTab === array[0] && <p>Item 1</p>}
      {selectedTab === array[1] && <p>Item 2</p>}
      {selectedTab === array[2] && <p>Item 3</p>}
    </div>
  );
};

export default TabsExample;
