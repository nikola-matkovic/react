const Box = (props) => {
    const {on, toggle, id} = props
    const style = {
        backgroundColor : on ? "#222" : "transparent",
    }
    return (
        <div className="box" style={style} 
            onClick={toggle}
        >
        </div>
    )
}

export default Box;
