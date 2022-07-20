import style from './style.module.css';
import memes from './memes.json';
import { useState } from 'react';

const Meme = (props) => {
    const [meme, setMeme] = useState({topText: "", bottomText: "", url: "https://i.imgflip.com/1tl71a.jpg"});
    const [allMemeImages, setAllMemeImages] = useState(memes);
    const getMeme = () => {
        let memesData = memes.data.memes;
        let randomNumber = Math.floor(Math.random() * memesData.length);
        let url = memesData[randomNumber].url;
        setMeme( (prevState) =>({...prevState, url}));
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
                <button type="submit" onClick={(e) => getMeme()}>Get a new meme image 🖼️</button>
            </form>
            <img src={meme.url} alt="meme-image" />
        </main>
    )
}

export default Meme;