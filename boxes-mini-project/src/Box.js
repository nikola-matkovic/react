const Box = (props) => {
    const  {on, switchFunction} = props;
    const style = {
        backgroundColor : on ? "#222" : "transparent",
    }
    console.log(props);
    return (
        <div className="box" style={style} >

        </div>
    )
}

export default Box;
