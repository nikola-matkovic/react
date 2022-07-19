import style from './style.module.css';
import memes from './memes.json';

const Meme = (props) => {
    const handleButtonClick = (e) => {
        let memesData = memes.data.memes;
        let randomNumber = Math.floor(Math.random() * memesData.length);
        let url = memesData[randomNumber].url;
        console.log(url);
    }
    return (
        <main className={style.memeContainer}>
            <form 
                className={style.memeForm}
                onSubmit={(e) => {e.preventDefault();
            }}    
            >
                <div className={style.inputs}>
                    <input type="text" placeholder='top text'/>
                    <input type="text" placeholder='bottom text'/>
                </div>
                <button type="submit" onClick={(e) => handleButtonClick(e)}>Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

export default Meme;