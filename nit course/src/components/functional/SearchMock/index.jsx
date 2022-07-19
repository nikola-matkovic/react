import { useState } from "react"
const SearchMock = (props) => {
    const [value, setValue] = useState(0);
    return(
        <>
        <SearchInput value={value} setValue={setValue}/>
        <SearchList  value={value} setValue={setValue}/> 
        </>
    )
}

const SearchInput = (props) => {
    const {value, setValue} = props
    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}
        />
    )
}

const SearchList = (props) => {
    const {value, setValue} = props
    if(value === "") return false
    const list = [  
        {title: "harry potter 6" },
        {title: "Game of thrones" },
        {title: "Lion King" },
        {title: "How to train your dragon" },
        {title: "Kamiondžije "}
    ]
    let filtered = list.filter((movie) => movie.title.toLowerCase().includes(value.toLowerCase()) )
    let mapped = filtered.map( movie => <p>{movie.title}</p>)
    return (mapped)
}


export default SearchMock;