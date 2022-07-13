import style from './interests.module.css';

export default function Interests() {
    return (
        <div className = {style.container}>
            <h3 className={style.h3}>Interests</h3>
            <p className={style.p} >
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    );
}