import { useState } from "react";
import { useEffect } from "react";
import { catApi } from "../../../api/api";

const RandomCat = () => {
  const [randomCat, setRandomCat] = useState({});

  const fetchRandomCat = async () => {
    try {
      const result = await catApi.get("/v1/images/search");
      const data = result.data;
      setRandomCat(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomCat();
  }, []);

  return (
    <div
      style={{
        width: 500,
        height: 500,
        margin: "auto",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={() => fetchRandomCat()}>Random cat</button>
      <img
        src={randomCat.url}
        alt=""
        style={{ maxHeight: 500, maxWidth: 500 }}
      />
    </div>
  );
};

export default RandomCat;
