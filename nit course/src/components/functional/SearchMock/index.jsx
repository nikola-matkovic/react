import { useState } from "react";

const SearchMock = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <SearchList search={searchValue} />
    </div>
  );
};

const SearchInput = (props) => {
  const { value, setValue } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const SearchList = (props) => {
  const { search } = props;

  const list = [
    { title: "Harry potter 6" },
    { title: "Game of thrones" },
    { title: "Lion king" },
    { title: "How to train your dragon" },
    { title: "Kamiondzije" },
  ];

  const searchResult = list.filter((movie) => {
    if (search === "") return false;

    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {searchResult.map((movie) => {
        return <p>{movie.title}</p>;
      })}
    </div>
  );
};

export default SearchMock;
