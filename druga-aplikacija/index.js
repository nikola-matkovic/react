//learning JSX

//class = classname 

const root = document.querySelector("#root")

// const h1 = document.createElement("h1")
// h1.textContent = "Hello World!"
// h1.className = "header"
// console.log(h1) // <h1 class="header">

const oldPage = (
    <div>
        <h1 className="header"> This is JSX </h1>
        <p>This is a paragraph</p>
    </div>
)

const page = (
    <nav>
        <h1>BEST REACT DEVELOPER</h1>
    </nav>
)

ReactDOM.render(page, root)