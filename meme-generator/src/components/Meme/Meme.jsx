import style from './style.module.css';


const Meme = (props) => {
    return (
        <main className={style.memeContainer}>
            <form className={style.memeForm}>
                <div className={style.inputs}>
                    <input type="text" />
                    <input type="text" />
                </div>
                <button type="submit">Get a new meme image</button>
            </form>
        </main>
    )
}

export default Meme;