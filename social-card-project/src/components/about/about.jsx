import style from './about.module.css';

export default function About() {
    return (
        <div className = {style.container}>
            <h3 className={style.h3}>About</h3>
            <p className={style.p} >
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
    )
}