import style from './style.module.css';
import { useState, useEffect } from 'react';

const Meme = (props) => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "", 
        url: "https://i.imgflip.com/1tl71a.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    const getMeme = () => {
        let randomNumber = Math.floor(Math.random() * allMemeImages.length);
        let url = allMemeImages[randomNumber].url;
        setMeme( (prevState) =>({...prevState, url}));
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setMeme( (prevState) =>({...prevState, [name]: value}));
    }

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json())
        .then(data => {
           setAllMemeImages(data.data.memes);
        }) 
    },[])

    return (
        <main className={style.memeContainer}>
            <form 
                className={style.memeForm}
                onSubmit={(e) => {e.preventDefault();
            }}    
            >
                <div className={style.inputs}>
                    <input name ="topText" type="text" placeholder='top text' value={meme.topText} onChange={(e)=>handleChange(e)}/>
                    <input name ="bottomText" type="text" placeholder='bottom text' value={meme.bottomText} onChange={(e)=>handleChange(e)}/>
                </div>
                <button type="submit" onClick={(e) => getMeme()}>Get a new meme image 🖼️</button>
            </form>
            <div className={style.meme}>
                <div className={style.topText}>{meme.topText}</div>
                <div className={style.bottomText}>{meme.bottomText}</div>
                <img src={meme.url} alt="meme" />
            </div>
        </main>
    )
}

export default Meme;