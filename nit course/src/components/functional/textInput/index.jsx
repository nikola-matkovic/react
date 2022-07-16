import style from './style.module.css'
import { useState } from 'react'

const TextInput = (props) => {
    const {defaultValue, label} = props
    const [text, setText] = useState(defaultValue)
    return (
        <div className= {style.container}>
            <p>{label}</p>
            <input className={style.TextInput} type="text"  defaultValue={defaultValue}/>
        </div>
    );
}

export default TextInput;